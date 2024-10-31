/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {SetPickerItemViewLevel, SetPickerItemViewName,} from ".";
import {UTILS} from "../../common";

const SetPickerItemView = ({...props}) => {
    const {item, selected, options, index, onClickToLineCheckbox} = props;
    const {componentContent, strHeight, highlightNodes, singleChoiceOnly, unavailableItemsList, ItemViewName} = options;
    const {id, hasChildren} = item;

    const skeletonSpace = 4;
    const skeletonColor = '#ddd';
    const minSkeletonElements = 4;
    const maxSkeletonElements = 20;
    const minSkeletonElementLength = 5;
    const maxSkeletonElementLength = 60;

    const itemIsUnavailable = unavailableItemsList ? unavailableItemsList.includes(id) : false;

    const generateSkeletonArr = () => {
        const randomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
        const out = [];
        for(let i = 0; i < randomInteger(minSkeletonElements, maxSkeletonElements); i++) {
            out.push(randomInteger(minSkeletonElementLength, maxSkeletonElementLength));
        }
        return out;
    }

    const currSkeleton = React.useRef(generateSkeletonArr());

    const getChecked = () => selected.selectedList.includes(id);
    const [checked, setChecked] = React.useState(getChecked());

    const inputRef = React.useRef(null);
    const checkRadioClass = React.useRef(singleChoiceOnly ? 'radio' : 'check');
    const checkRadioType = React.useRef(singleChoiceOnly ? 'radio' : 'checkbox');

    React.useEffect(() => {
        const newChecked = getChecked();
        if(newChecked === checked) {
            return;
        }
        setChecked(newChecked);
    }, [selected]);

    const getSkeleton = arr => {
        const out = [];
        let start = 0;

        const getSk = length => {
            return `${skeletonColor} ${start}px, ${skeletonColor} ${start + length}px, #fff ${start + length}px, #fff ${start + length + skeletonSpace}px`;
        }

        for(let length of arr) {
            out.push(getSk(length));
            start += (length + skeletonSpace);
        }

        return `linear-gradient(to right, ${out.join(',')})`;
    }

    const onClickToSelect = () => {
        if(itemIsUnavailable) return;
        onClickToLineCheckbox(item, !checked);
    }

    const itemIsEmptyClass = !id ? ' item-is-empty' : '';
    const itemHasChildrenClass = hasChildren && highlightNodes ? ' item-has-children' : '';
    const itemIsUnavailableClass = itemIsUnavailable ? ' item-is-unavailable' : '';

    const CurrentItemViewName = ItemViewName ? ItemViewName : SetPickerItemViewName;

    return (
        <React.Fragment>
            <div
                className={`tf_smartlist-item${itemIsEmptyClass}${itemHasChildrenClass}${itemIsUnavailableClass}${checked ? ' selected' : ''}`}
                style={{height: `${strHeight}px`}}
                index={index}
                onClick={onClickToSelect}
            >
                <div className={`tf_smartitem`}>
                    <SetPickerItemViewLevel  {...props} />
                    {UTILS.parseParams(componentContent?.line?.select).show && (
                        <div className={`tf_form-${checkRadioClass.current}`}>
                            <input
                                ref={inputRef}
                                className={`tf_form-${checkRadioClass.current}-input`}
                                name="selectedGroup"
                                type={checkRadioType.current}
                                checked={checked}
                            />
                        </div>
                    )}
                    <CurrentItemViewName
                        {...props}
                        skeleton={typeof id === 'undefined' ? getSkeleton(currSkeleton.current) : null}
                        itemIsEmptyClass={itemIsEmptyClass}
                        getChecked={getChecked}
                        checked={checked}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}
export default SetPickerItemView;
