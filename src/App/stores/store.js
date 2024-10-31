/* eslint-disable no-useless-constructor */
/* eslint-disable import/no-anonymous-default-export */

import {observable, makeObservable/*, makeAutoObservable*/} from "mobx";
//import {toJS} from 'mobx';

class Store {
    constructor() {
//        makeAutoObservable(this, {}, {autoBind: true});
    }

    createStore = (name, data) => {
        this[name] = data;
        makeObservable(this, {[name]: observable});
    }

    getStore = () => this;

    getState = addr => {
        const {objName, index} = this.getAddress(addr);
        return objName[index];
    }

    setState = (addr, data) => {
        const {objName, index} = this.getAddress(addr);
        objName[index] = data;
    }

    updateState = (addr, data) => {
        const {objName, index} = this.getAddress(addr);
        const oldData = objName[index] || {};
        const newData = {...oldData, ...data};
        objName[index] = newData;
    }

    getAddress = addr => {
        let address = this;
        const indexes = addr.split('.');
        const length = indexes.length - 1;

        let index;

        for(let i in indexes) {
            index = indexes[i];
            if(i < length) {
                if(address[index] === undefined) {
                    address[index] = {};
                }
                address = address[index];
            }
        }
        return {objName: address, index};
    }
}

export default new Store();
