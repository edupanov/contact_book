import React from 'react';
import Button from "@material-ui/core/Button";

const Avatar = () => {

    const imageHandler = (event: any) => {
        const file= event.target.files[0]
        const formData = new FormData()
        console.log(file)
        formData.append('image', file)
    }

    return (
        <div>
            <input
                accept="image/*"
                onChange={imageHandler}
                style={{ display: 'none' }}
                id="raised-button-file"
                multiple
                type="file"
            />
            <label htmlFor="raised-button-file">
                <Button variant='contained' component="span" >
                    Выбрать фото
                </Button>
            </label>
        </div>
    );
};

export default Avatar;