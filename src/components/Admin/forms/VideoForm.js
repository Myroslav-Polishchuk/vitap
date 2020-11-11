import React, {useState, useRef} from 'react'

function VideoForm(props) {
    return <>
        <h6>ID: {props._id}</h6>
        <div>
            Назад
        </div>
        <div>
            Оновити
        </div>
        <div onClick={props.deleteData}>
            Видалити
        </div>
        <form ref={props.formRef}>
            <input 
                ref={srcRef}
                type="text"
                value={src}
                onChange={(event) => setSrc(event.target.value)}
                />
            <input 
                ref={titleRef}
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                />
            <input 
                ref={previewImgRef}
                type="text"
                value={previewImg}
                onChange={(event) => setPreviewImg(event.target.value)}
                />
            <input 
                ref={previewImgAltRef}
                type="text"
                value={previewImgAlt}
                onChange={(event) => setPreviewImgAlt(event.target.value)}
                />
            <input 
                ref={categoryIDRef}
                type="text"
                value={categoryID}
                onChange={(event) => setCategoryID(event.target.value)}
                />
            <input 
                ref={previewTextRef}
                type="text"
                value={previewText}
                onChange={(event) => setPreviewText(event.target.value)}
                />
        </form>
        <button onClick={props.cleanForm}>
            Очистити форму
        </button>
        <button>
            Відправити (Створити \\ Оновити)
        </button>
    </>
}

VideoForm.defaultProps = {
    src: '',
    title: '',
    previewImg: '',
    previewImgAlt: '',
    categoryID: '',
    previewText: ''
}

export default VideoForm;

// const [src, setSrc] = useState(props.src);
// const [title, setTitle] = useState(props.title);
// const [previewImg, setPreviewImg] = useState(props.previewImg);
// const [previewImgAlt, setPreviewImgAlt] = useState(props.previewImgAlt);
// const [categoryID, setCategoryID] = useState(props.categoryID);
// const [previewText, setPreviewText] = useState(props.previewText);

// const srcRef = useRef(null);
// const titleRef = useRef(null);
// const previewImgRef = useRef(null);
// const previewImgAltRef = useRef(null);
// const categoryIDRef = useRef(null);
// const previewTextRef = useRef(null);

// function setData ({src, title, previewImg, previewImgAlt, categoryID, previewText}) {
//     setSrc(src)
//     setTitle(title)
//     setPreviewImg(previewImg)
//     setPreviewImgAlt(previewImgAlt)
//     setCategoryID(categoryID)
//     setPreviewText(previewText)
// }
