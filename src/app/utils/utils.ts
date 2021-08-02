import moment from 'moment'
import {useEffect, useState} from "react";

export const formatDate = (date: string, format: string) => {
    return moment(new Date(date)).format(format)
}

