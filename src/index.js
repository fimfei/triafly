import React from 'react';

import {Table, callTable} from './App/components/Table';
import {Graph} from './App/components/Graph';

import {Alert, callAlert} from './App/widgets/Alert';
import {ColorPicker} from './App/widgets/ColorPicker';
import {DatePicker} from './App/widgets/DatePicker';
import {ElementsPicker} from './App/widgets/ElementsPicker';
import {FilesPicker} from './App/widgets/FilesPicker';
import {ListPicker} from './App/widgets/ListPicker';
import {PeriodPicker} from './App/widgets/PeriodPicker';
import {Popup, callPopup} from './App/widgets/Popup';
import {Prompt, callPrompt} from './App/widgets/Prompt';

import {InputBool, InputNumber, InputText, SelectFromList} from './App/forms';

export {Alert, ColorPicker, Table};

/*
const components = () => {Table, callTable, Graph};
const widgets = () => {Alert, callAlert, ColorPicker, DatePicker, ElementsPicker, FilesPicker, ListPicker, PeriodPicker, Popup, callPopup, Prompt, callPrompt};
const forms = () => {InputBool, InputNumber, InputText, SelectFromList};

export {components, widgets, forms}
*/