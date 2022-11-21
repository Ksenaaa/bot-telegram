import React, { useState } from 'react'

import { useTelegram } from '../../hooks/useTelegram'
import { ProductItem } from '../ProductItem/ProductItem'
import { getTotalPrice } from '../../utils/getTotalPrice'

import './ProductList.css'

const products = [
    {id: '1', title: 'Джинсы', price: '490', description: 'Синего цвета, прямые'},
    {id: '2', title: 'Куртка', price: '345', description: 'Красного цвета, теплая'},
    {id: '3', title: 'Сапоги', price: '4660', description: 'Желтого цвета, теплые'},
    {id: '4', title: 'Рукавички', price: '257', description: 'Желтого цвета, теплые'},
    {id: '5', title: 'Юбка', price: '366', description: 'Красного цвета, теплая'},
    {id: '6', title: 'Топ', price: '335', description: 'Синего цвета, прямые'},
    {id: '7', title: 'Кофта', price: '887', description: 'Красного цвета, теплая'},
    {id: '8', title: 'Носки', price: '23', description: 'Желтого цвета, теплые'}
]

export const ProductList = () => {
    const [addItems, setAddedItems] = useState([])
    const { tg } = useTelegram()

    const onAdd = (product) => {
        const alreadyAdded = addItems.find(item => item.id === product.id)
        let newItems = []

        if (alreadyAdded) {
            newItems = addItems.filter(item => item.id !== product.id)
        } else {
            newItems = [...addItems, product]
        }
        setAddedItems(newItems)

        if (newItems.length === 0) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)} `
            })
        }

    }

    return (
        <div className={"list"}>
            {products.map(item =>
                <ProductItem
                    key={item.id}
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            )}
        </div>
    )
}
