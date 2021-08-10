import React, {ChangeEvent, useState} from 'react';
import Button from "@material-ui/core/Button";
import Avatar from '@material-ui/core/Avatar'
import AvatarEditor from "react-avatar-editor";
import {Box, Slider} from "@material-ui/core";
import {useActions} from "../../../../store/hooks/useActions";
import {ContactInterface} from "../../../contactList/types/contact.interface";

type AvatarPropsType ={
    contact: ContactInterface
}


const Logo = (props: AvatarPropsType) => {
    const {contact} = props

    const {saveAvatar} = useActions()

    let editor = "";
    const [picture, setPicture] = useState({
        cropperOpen: false,
        img: null,
        zoom: 2,
        croppedImg:
            "https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png"
    });

    const handleSlider = (event: ChangeEvent<{}>, value: any) => {
        setPicture({
            ...picture,
            zoom: value
        });
    };

    const handleCancel = () => {
        setPicture({
            ...picture,
            cropperOpen: false
        });
    };

    const setEditorRef = (ed: any) => {
        editor = ed;
    };

    const handleSave = () => {

        // @ts-ignore
        const canvasScaled = editor.getImageScaledToCanvas();
        const croppedImg = canvasScaled.toDataURL();

        setPicture({
            ...picture,
            img: null,
            cropperOpen: false,
            croppedImg: croppedImg
        });

        // @ts-ignore
        saveAvatar(croppedImg, picture.img.name, contact.id)

    };
    const handleFileChange = (e: any) => {
        setPicture({
            ...picture,
            img: e.target.files![0],
            cropperOpen: true
        });
    };



    return (
        <div>
            <Box display="flex" flexWrap='wrap'>
                <Box width="500%">
                    <Avatar
                        src={picture.croppedImg}
                        style={{width: "100%", height: "auto", padding: "10", marginBottom: 10}}
                    />

                    <Button
                        variant="contained"
                        style={{backgroundColor: "#3451b9", color: "white"}}
                    >
                        <input type="file" accept="image/*" onChange={handleFileChange}/>
                    </Button>
                </Box>

                {picture.cropperOpen && (
                    <Box display="block">
                        <AvatarEditor
                            ref={setEditorRef}
                            image={picture.img!}
                            width={200}
                            height={200}
                            border={5}
                            color={[255, 255, 255, 0.6]} // RGBA
                            rotate={0}
                            scale={picture.zoom}
                        />
                        <Slider
                            aria-label="raceSlider"
                            value={picture.zoom}
                            min={1}
                            max={10}
                            step={0.1}
                            onChange={handleSlider}
                        />
                        <Box>
                            <Button variant="contained" onClick={handleCancel}>
                                Cancel
                            </Button>
                            <Button onClick={handleSave}>Save</Button>
                        </Box>
                    </Box>
                )}
            </Box>
        </div>
    );
};

export default Logo;
