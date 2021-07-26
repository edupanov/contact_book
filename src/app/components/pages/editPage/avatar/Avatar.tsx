import React from 'react';
import Button from "@material-ui/core/Button";
import Avatar from '@material-ui/core/Avatar'

const Avatarrr = () => {

    const imageHandler = (event: any) => {
        const file= event.target.files[0]
        const formData = new FormData()
        console.log(file.name)
        formData.append('image', file)
        localStorage.setItem('image', JSON.stringify(file));
    }

    return (
        <div>
            <Avatar alt={File.name} src={JSON.parse(sessionStorage.getItem('phone') || '{}')} />
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

export default Avatarrr;
