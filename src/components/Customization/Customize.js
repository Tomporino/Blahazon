import React, { useState, useEffect } from 'react';
import ImageEditor from "@toast-ui/react-image-editor";
import "tui-image-editor/dist/tui-image-editor.css";
import "./Custom.css"
import testImage from '../../resources/Tshirts/basicWhite.png'
import { Button } from '@material-ui/core';

const myTheme = {
    "menu.backgroundColor": "white",
    "common.backgroundColor": "lightgrey",
    "downloadButton.backgroundColor": "white",
    "downloadButton.borderColor": "white",
    "downloadButton.color": "black",
};

const download = require("downloadjs");

function Customize(){
    const [imageSrc, setImageSrc] = useState("");
    const imageEditor = React.createRef();
    

    const saveImageToDisk = () => {
        const imageEditorInst = imageEditor.current.imageEditorInst;
        const data = imageEditorInst.toDataURL();
        if (data) {
        const mimeType = data.split(";")[0];
        const extension = data.split(";")[0].split("/")[1];
        download(data, `image.${extension}`, mimeType);
        }
    };

    useEffect(() => {
        let header = document.querySelector(".tui-image-editor-header");
        header.innerHTML = `<button onClick={saveImageToDisk}>Download to Disk</button>`;
        header.className = "buttonDiv"
    });

    return (
        <>
        <ImageEditor
        includeUI={{
        loadImage: {
            path: testImage,
            name: "image",
        },
        theme: myTheme,
        // add toolbar functionality
        menu: ["draw", "text"],
        // init menu is an empty string so it won't show dialog on image load
        initMenu: "",
        uiSize: {
            height: `90vh`,
        },
        menuBarPosition: "left",
        }}
        // set size of the image editor
        cssMaxHeight={500}
        cssMaxWidth={500}
        selectionStyle={{
        cornerSize: 20,
        rotatingPointOffset: 70,
        }}
        usageStatistics={true}
        ref={imageEditor}
        />
        </>
    )
}

export default Customize;