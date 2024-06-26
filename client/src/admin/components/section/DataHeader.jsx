
import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../SearchForm';
import Button from '../Button';

const DataHeader = ({ title, Placeholder, addButtonLink }) => {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between">
            <h1 className="text-2xl font-primary font-medium mb-3 md:mb-0">
                {title}
            </h1>
            <div className="flex items-center space-x-5">
                <SearchForm placeholder={Placeholder} />
                <Button
                    classname="h-10 px-6 font-secondary text-sm rounded-md font-medium bg-green-500 hover:bg-green-600 text-white"
                    type="search"
                    name="search">
                    Cari
                </Button>
                <Button
                    classname="h-10 px-6 font-secondary text-sm rounded-md font-medium bg-sky-500 hover:bg-sky-700 text-white"
                    type="add"
                    name="tambah">
                    <Link to={addButtonLink}>Tambah</Link>
                </Button>
            </div>
        </div>
    );
};

export default DataHeader;
