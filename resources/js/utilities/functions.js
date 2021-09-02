// called every time a file's `status` changes
export const handleChangeImageStatus = ({ meta, file }, status) => {
    //console.log(status, meta, file);

    switch (status) {
        case 'done':
            setImages([...images, file]);
            break;
        case 'removed':
            setImages(images.filter(value => value != file))
            break;
    }
}
