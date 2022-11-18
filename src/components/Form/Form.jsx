import React, { useEffect, useState } from 'react'

import { useTelegram } from '../../hooks/useTelegram'

import './Form.css'

export const Form = () => {
    const [country, setCountry] = useState('')
    const [street, setStreet] = useState('')
    const [subject, setSubject] = useState('phisical')

    const { tg } = useTelegram()

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [])

    useEffect(() => {
        if (!country || !street) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }, [country, street])


    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }
    
    return (
        <div className={"form"}>
            <h3>Введите Ваши данные</h3>
            <input type="text" className={"input"} placeholder='Страна' value={country} onChange={onChangeCountry} />
            <input type="text" className={"input"} placeholder='Улица' value={street} onChange={onChangeStreet} />
            <select className={'select'} value={subject} onChange={onChangeSubject}>
                <option value={'phisical'}>Физ. лицо</option>
                <option value={'legal'}>Юр. лицо</option>
            </select>
        </div>
    )
}
