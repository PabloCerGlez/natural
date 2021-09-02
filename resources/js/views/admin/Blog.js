import React, {useEffect, useState} from 'react';
import ReactDOM from "react-dom";

// The editor core
import Editor from '@react-page/editor';

// Load some exemplary plugins:

// The rich text area plugin
import slate from '@react-page/plugins-slate';
// Stylesheets for the rich text area plugin
import '@react-page/plugins-slate/lib/index.css';

// A plugin for background images
import background from '@react-page/plugins-background';
// Stylesheets for  background layout plugin
import '@react-page/plugins-background/lib/index.css';
import {Body, Card} from "../../components/adminLte/Card/Card";
import {Input} from "../../components/adminLte/Form/Input/Input";
import {useForm} from "react-hook-form";
import {handleChangeImageStatus} from "../../utilities/functions";
import Dropzone from "react-dropzone-uploader";

const plugins = {
    content: [slate()],
    layout: [background({ defaultPlugin: slate() })],
};

export const simpleDefaultState = {"id":"f3a9fe8e-f35c-49ca-a262-d743e5f470ff","cells":[{"id":"d938a360-c33c-4775-bc50-251a581fa9c8","inline":null,"size":12,"rows":[{"id":"a7b5ca2e-1ab3-4cfd-9901-70aae37049df","cells":[{"id":"a80c11c7-4b5c-44f2-9f9c-6f413b8773c2","inline":null,"size":12,"content":{"plugin":{"name":"ory/editor/core/content/slate","version":"0.0.4"},"state":{"slate":[{"children":[{"text":"Hola mundo este es mi primer blog"}],"data":{"align":"left"}}]}}}]}]}]};

export const Blog = () => {

    const PUBLISH = 1;
    const SAVE = 2;

    const { register, handleSubmit, watch, errors } = useForm();
    const [editorValue, setEditorValue] = useState(simpleDefaultState);
    const [imagesUpdated, setImagesUpdated] = useState([]);
    const [action, setActionType] = useState(SAVE);
    const [post, setPost] = useState(null);
    const [postTitle, setPostTitle] = useState('');
    const [postId, setPostId] = useState(null);
    const [images, setImages] = useState([]);

    useEffect(() => {
        let urlPath = window.location.pathname;
        urlPath = urlPath.split('/')
        if (urlPath[4] === 'edit') {
            axios.get(`/post/${urlPath[3]}`).then(response => {
                let content = JSON.parse(response.data.content);
                setEditorValue(content);
                setPostTitle(response.data.title);
                setPostId(urlPath[3]);
            });
        }
    }, []);

    const onSubmit = data => {
        let formData = new FormData();
        formData.append('content', JSON.stringify(editorValue));
        formData.append('post_status_id', action);
        formData.append('title', data.title);
        formData.append('image', value)

        if (postId) {
            axios.put(`/admin/post/${postId}`, formData).then(response => {
                dd(response)
            })
        } else {
            images.map(value => formData.append('images[]', value));

            axios.post('/admin/post', formData).then(response => {
                dd(response)
            });
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{marginBottom:'10px'}}>
                <button
                    className="btn btn-flat btn-info mr-2"
                    onClick={e => {
                        setActionType(SAVE);
                        onSubmit(e);
                    }}
                >Guardar</button>

                <button
                    className="btn btn-flat btn-success"
                    onClick={e => {
                        setActionType(PUBLISH);
                        onSubmit(e);
                    }}
                >Publicar</button>
            </div>
            <Card title="Info">
                <Body>
                    <label>Imágenes</label>
                    <Dropzone
                        multiple={false}
                        onChangeStatus={handleChangeImageStatus}
                        accept="image/*"
                        SubmitButtonComponent={() => null}
                        inputContent={'Subir imágenes'}
                        initialFiles={imagesUpdated}
                    />
                    <br/>
                    <Input title="Titulo" name="title" handleOnChange={e => setPostTitle(e.target.value)} value={postTitle} reference={register({ required: true })} error={errors.title}/>
                </Body>
            </Card>
            <Card title="Contenido" >
                <Body>
                    <Editor
                        plugins={plugins}
                        defaultPlugin={slate()}
                        value={editorValue}
                        onChange={setEditorValue}
                    />
                </Body>
            </Card>
        </form>
    );
};

if (document.getElementById('blogReact')) {
    // find element by id
    const element = document.getElementById('blogReact')

    // create new props object with element's data-attributes
    // result: {tsId: "1241"}
    const props = Object.assign({}, element.dataset)

    // render element with props (using spread)
    ReactDOM.render(<Blog {...props}/>, element);
}

