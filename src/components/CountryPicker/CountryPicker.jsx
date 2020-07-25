import React, { useState, useEffect } from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';

import styles from './CountryPicker.modules.css';

import {fetchCountries} from '../../api';

const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setFetchedCountries]);
    return (
        <FormControl className={styles.FormControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value='global'>Global</option>
                {fetchedCountries.map(country)=> <option key={i} value={country}>{country}</option>}
            </NativeSelect>
        </FormControl>
    )
}
export default CountryPicker;