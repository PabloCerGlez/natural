import {Header, Title} from "../../components/Header";
import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";

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

const plugins = {
    content: [slate()],
    layout: [background({ defaultPlugin: slate() })],
};

export const Post = () => {

    const [editorValue, setEditorValue] = useState({});
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('/img/blog-header.png');

    let { id } = useParams();

    useEffect(() => {
        axios.get(`/post/${id}`).then(response => {
            let content = JSON.parse(response.data.content);
            setEditorValue(content);
            setTitle(response.data.title);
            if (response.data.img) {
                setTitle(response.data.img);
            }
        });
    }, []);

    return (
        <>
            <Header
                img={img}
                title={title}
            />

            <div className="px-10 lg:px-32 my-16">
                <Editor
                    plugins={plugins}
                    defaultPlugin={slate()}
                    value={editorValue}
                    readOnly={true}
                />
            </div>
        </>
    )
}



