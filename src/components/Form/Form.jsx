import React from 'react'

import './Form.css'

export const Form = () => {
    
    return (
        <div className={"form"}>
            <h3>Введите Ваши данные</h3>
            <input type="text" className={"input"} placeholder='Страна' />
            <input type="text" className={"input"} placeholder='Улица' />
            <select className={'select'}>
                <option value={'phisical'}>Физ. лицо</option>
                <option value={'legal'}>Юр. лицо</option>
            </select>
        </div>
    )
}
