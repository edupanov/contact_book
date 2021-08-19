import React, {ChangeEvent, useState} from 'react';
import Button from "@material-ui/core/Button";
import Avatar from '@material-ui/core/Avatar'
import AvatarEditor from "react-avatar-editor";
import {Box, Slider} from "@material-ui/core";
import {ContactInterface} from "../../../contactList/types/contact.interface";
import {useActions} from "../../../../store/hooks/useActions";
import {useStylesAvatar} from "./styles/avatar.styles";

type AvatarPropsType = {
    contact: any
}
const Logo = ({contact}: AvatarPropsType) => {
    const styles = useStylesAvatar();
    const {saveAvatar} = useActions()
    const [avatar, setAvatar] = useState<string>(contact.imagePath)

    let editor = "";
    const [picture, setPicture] = useState({
        cropperOpen: false,
        img: null,
        zoom: 1,
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
        setAvatar(croppedImg)

        // @ts-ignore
        saveAvatar(picture.img.name, croppedImg, contact.id)

    };
    const handleFileChange = (e: any) => {
        setPicture({
            ...picture,
            img: e.target.files![0],
            cropperOpen: true
        });
    };
    // const imgFromServer: any = await toBase64()
    return (
        <div>
            <Box className={styles.wrapper}>
                <Box className={styles.box}>
                    <label htmlFor="logoCheck" className={styles.logoLabel}>
                        <Avatar
                            className={styles.avatar}
                            src={avatar}
                        />
                    </label>

                    {/*<Button*/}
                    {/*    className={styles.button}*/}
                    {/*    variant="contained"*/}
                    {/*>*/}
                        <input className={styles.logoInput} type="file" accept="image/*" id={'logoCheck'} onChange={handleFileChange}/>

                    {/*</Button>*/}
                </Box>

                {picture.cropperOpen && (
                    <Box
                        className={styles.editorWrapper}
                    >
                        <AvatarEditor
                            ref={setEditorRef}
                            image={picture.img!}
                            width={200}
                            height={200}
                            border={5}
                            color={[255, 255, 255, 0.6]}
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
