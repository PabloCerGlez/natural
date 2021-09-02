import React, {useEffect, useState} from 'react';
import Dropzone from 'react-dropzone-uploader'
import ReactDOM from 'react-dom';
import {Body, Card, Footer} from "./adminLte/Card/Card";
import {Input} from "./adminLte/Form/Input/Input";
import {useForm} from "react-hook-form";
import {handleChangeImageStatus} from "../utilities/functions";

const MyUploader = (props) => {
    let product = props.product ? JSON.parse(props.product) : null;

    const { register, handleSubmit, watch, errors } = useForm();
    const [images, setImages] = useState([]);
    const [imagesUpdated, setImagesUpdated] = useState([]);

    useEffect(() => {
        if (product?.images) {
            product.images.map(img => {
                fetch('/storage/' + img.path).then(res => {
                    res.arrayBuffer().then(buf => {
                        const file = new File([buf], img.path,  { type: 'image/jpeg' })
                        setImagesUpdated([file]);
                    })
                })
            })
        }
    }, []);

    const onSubmit = data => {
        let formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description);
        images.map(value => formData.append('images[]', value));

        if (!product) {
            axios.post('/admin/product', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                if (response.status === 201) {
                    window.location.href = '/admin/product'
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: '¡Ocurrió un error, contacta al administrador!',
                    })
                }
            });
        } else {
            formData.append('_method', 'put');
            axios.post('/admin/product/'+product.id, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                if (response.status === 200) {
                    window.location.href = '/admin/product'
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: '¡Ocurrió un error, contacta al administrador!',
                    })
                }
            });
        }

    };

    return (
        <Card title={product ? 'Editar producto' : 'Nuevo producto'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Body>
                    <label>Imágenes</label>
                    <Dropzone
                        onChangeStatus={handleChangeImageStatus}
                        accept="image/*"
                        SubmitButtonComponent={() => null}
                        inputContent={'Subir imágenes'}
                        inputWithFilesContent={'Agregar otra imagen'}
                        initialFiles={imagesUpdated}
                    />
                    <br/>
                    <Input defaultValue={product?.name} title="Nombre" name='name' reference={register({ required: true })} error={errors.name}/>
                    <Input defaultValue={product?.description} title="Descripción" name='description' reference={register({ required: true })} error={errors.name}/>
                </Body>

                <Footer>
                    <button className="btn btn-success">Guardar</button>
                </Footer>
            </form>
        </Card>
    )
}

if (document.getElementById('formProductsReact')) {
    // find element by id
    const element = document.getElementById('formProductsReact')

    // create new props object with element's data-attributes
    // result: {tsId: "1241"}
    const props = Object.assign({}, element.dataset)

    // render element with props (using spread)
    ReactDOM.render(<MyUploader {...props}/>, element);
}
