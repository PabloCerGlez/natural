import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import AsyncSelect from 'react-select/async';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Body, Card, Footer} from "./adminLte/Card/Card";
import {useForm} from "react-hook-form";
import {erroOccurred} from "../utilities/validationMessages";

const FormRaffles = (props) => {
    let {raffle} = props
    raffle = raffle ? JSON.parse(props.raffle) : null;

    const [products, setProducts] = useState(raffle ? raffle.products.map(product => (
        {material: product.name, id: product.id}
    )) : []);
    const [product, setProduct] = useState({});
    const [startDate, setStartDate] = useState(() => {
        if (!raffle) {
            const date = new Date();
            return new Date(date.getFullYear(), date.getMonth(), 15)
        } else {
            let splitDate = raffle.date.split(' ');
            splitDate = splitDate[0].split('-');
            return new Date(splitDate[0], splitDate[1], splitDate[2]);
        }
    });
    const { register, handleSubmit, watch, errors } = useForm();
    const [btnDisable, setBtnDisable] = useState(false);

    const promiseOptions = (inputValue) => (
        axios.get(`/admin/product?searchProduct=${inputValue}`,).then(response => (
            response.data.map(value => ({ value: value.id, label: value.name }))
        ))
    );

    // handle onChange event of the dropdown
    const handleChange = e => {
        setProduct(e);
    }

    const onClickDeleteMaterial = (id) => {
        setProducts(products => products.filter(value => value.id != id))
    }

    const createButtonOptions = (id) => {
        return <button type="button" className="btn btn-block btn-outline-danger btn-flat" onClick={() => onClickDeleteMaterial(id)}>
            <i className="fas fa-minus"/> Eliminar
        </button>
    };

    const getTable = () => (
        <>
            {products.map((material, key) => (
                <tr key={key}>
                    {Object.entries(material).map(([key, value]) => (
                        <td key={key}>{key === 'id' ? createButtonOptions(value) : value}</td>
                    ))}
                </tr>
            ))}
        </>
    )

    const onSubmit = data => {
        setBtnDisable(true);
        if (!raffle) {
            axios.post('/admin/raffle',{
                products: products, date:startDate
            }).then(response => {
                if(response.status === 201) {
                    window.location.href = '/admin/raffle'
                } else {
                    erroOccurred();
                }
            })
        } else {
            axios.put('/admin/raffle/'+raffle.id,{
                products: products, date:startDate
            }).then(response => {
                if(response.status === 200) {
                    window.location.href = '/admin/raffle'
                } else {
                    erroOccurred();
                }
            })
        }
    }

    const onclickAddMaterial = () => {
        setProducts(products => [...products, {products: product.label, id: product.value}]);
    }

    return (
        <Card title='Nuevo sorteo'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Body>
                    <div className="form-group">
                        <label>Fecha (La hora del sorteo es a las 12:00 pm)</label>
                        <DatePicker
                            className={'form-control'}
                            locale="es"
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            ref={register}
                        />
                    </div>

                    <div className="row">
                        <div className="col-md-8">
                            <div className="form-group">
                                <label>Producto</label>
                                <AsyncSelect
                                    cacheOptions
                                    defaultOptions
                                    loadOptions={promiseOptions}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <button type="button" className="btn btn-block btn-outline-primary btn-flat" style={style.button} onClick={onclickAddMaterial}>
                                    <i className="fas fa-plus"/> Agregar
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr/>

                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>Productos</th>
                            <th>Opciones</th>
                        </tr>
                        </thead>
                        <tbody>
                        {getTable()}
                        </tbody>

                    </table>
                </Body>

                <Footer>
                    <button className="btn btn-success btn-flat" disabled={btnDisable}>Guardar</button>
                </Footer>
            </form>
        </Card>
    )
}

const style = {
    button: {
        marginTop: "32px"
    }
}

if (document.getElementById('formRafflesReact')) {
    // find element by id
    const element = document.getElementById('formRafflesReact')

    // create new props object with element's data-attributes
    // result: {tsId: "1241"}
    const props = Object.assign({}, element.dataset)

    // render element with props (using spread)
    ReactDOM.render(<FormRaffles {...props}/>, element);
}
