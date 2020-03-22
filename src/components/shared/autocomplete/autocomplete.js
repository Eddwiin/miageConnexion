import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './autocomplete.scss';

const Autocomplete = ({
    autocompleteStyle,
    inputStyle,
    liStyle,
    items,
    keyBind,
    valueBind,
    maxElements = 15,
    placeholder,
    selectEvent = () => {},
    itemSortedEvent = () => {}

}) => {
    const [inputVal, setInputVal] = useState("");
    const [itemsCopy, setItemsCopy] = useState([]);

    const handleChange = event => {
        setInputVal(event.target.value);
        
        const itemsSorted = items.filter((item, index) => {
            const valueTocheck = item[valueBind].toLowerCase() || item.toLowerCase();
            if(event.target.value && valueTocheck.includes(event.target.value.toLowerCase())) {
                if (maxElements &&  maxElements - 1 < index) {
                    return undefined;
                }
                return item;
            }
            return undefined;
        });

        itemSortedEvent(itemsSorted);
        setItemsCopy(itemsSorted);
    }

    const onSelect = (item) => {
        selectEvent(item);
        setInputVal(item[valueBind] || item);
        setItemsCopy([])
    }

    return (
        <div className="autocomplete" style={autocompleteStyle}>
            <input  className="autocomplete__input" type="text" style={inputStyle} placeholder={placeholder}
                    onChange={handleChange} value={inputVal} />
            { (itemsCopy.length > 0) ? ( 
                <ul className="autocomplete__content" >
                { itemsCopy.map((item, index) => {
                    const key = item[keyBind] || item + index;
                    const value = item[valueBind] || item;
                    return (
                        <React.Fragment key={key} >
                            <li onClick={() => onSelect(item)}  style={liStyle} className="autocomplete__content__suggestion">
                                { value }
                            </li>
                        </React.Fragment>)
                }) }
              
            </ul>
            ) : undefined }
        </div>
    )
}

Autocomplete.propTypes = {
    autocompleteStyle: PropTypes.object,
    inputStyle: PropTypes.object,
    liStyle: PropTypes.object,
    items: PropTypes.array.isRequired,
    keyBind: PropTypes.string,
    valueBind: PropTypes.string,
    maxElements: PropTypes.number,
    onSelectEvent: PropTypes.func,
    onItemSorted: PropTypes.func
}
export { Autocomplete }