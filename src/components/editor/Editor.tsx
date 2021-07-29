import React, { useState } from 'react';
import Widget from '../widget/Widget';
import './Editor.scss';

const Editor: React.FC = () => {
    // Assumption:
    // Title is not set as default
    // Temperature default unit is Celsius
    // Wind is shown in default
    const [ widgetTitle, setWidgetTitle ] = useState('' as string);
    const [ isCelsius , setIsCelsius ] = useState(true as boolean);
    const [ showWind, setShowWind ] = useState(true as boolean);

    const handleWidgetTitleChange = (event: React.FormEvent<HTMLInputElement>) => {
        setWidgetTitle(event.currentTarget.value);
    }

    return (
        <div className="editor">
            <div className="editor__container">

                <div className="editor__edit-panel">
                    <div className="editor__control-field">
                        <span className="editor__control-label">Title</span>
                        <input
                            type="text"
                            className="editor__text-input"
                            placeholder="Title of widget"
                            value = {widgetTitle}
                            onChange={handleWidgetTitleChange} />
                    </div>
                    <div className="editor__control-field">
                        <span className="editor__control-label">Temperature</span>
                        <div className="editor__radio-group">
                            <label className="editor__radio-btn">
                                <input
                                    type="radio"
                                    className="editor__radio-input"
                                    name="temperature"
                                    defaultChecked={isCelsius}
                                    onChange={() => setIsCelsius(true)} />
                                <span className="editor__radio-icon" />
                                <span className="editor__radio-text">&#176;C</span>
                            </label>
                            <label className="editor__radio-btn">
                                <input
                                    type="radio"
                                    className="editor__radio-input"
                                    name="temperature"
                                    onChange={() => setIsCelsius(false)} />
                                <span className="editor__radio-icon" />
                                <span className="editor__radio-text">&#176;F</span>
                            </label>
                        </div>
                    </div>
                    <div className="editor__control-field">
                        <span className="editor__control-label">Wind</span>
                        <div className="editor__radio-group">
                            <label className="editor__radio-btn">
                                <input
                                    type="radio"
                                    className="editor__radio-input"
                                     name="wind"
                                     defaultChecked={showWind}
                                     onChange={() => setShowWind(true)}  />
                                <span className="editor__radio-icon" />
                                <span className="editor__radio-text">On</span>
                            </label>
                            <label className="editor__radio-btn">
                                <input
                                    type="radio"
                                    className="editor__radio-input"
                                    name="wind"
                                    onChange={() => setShowWind(false)} />
                                <span className="editor__radio-icon" />
                                <span className="editor__radio-text">Off</span>
                            </label>
                        </div>
                    </div>
                </div>

                <span className="editor__verticle-divider" />

                <div className="editor__display-panel">
                    <Widget
                        widgetTitle={widgetTitle}
                        isCelsius={isCelsius}
                        showWind={showWind} />
                    {/* <div style={{height: '100%', width: '100%', backgroundColor: 'red'}}></div> */}
                </div>
            </div>
        </div>
    )
}

export default Editor
