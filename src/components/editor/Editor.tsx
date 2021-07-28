import React, { useState } from 'react';
import './Editor.scss';

const Editor: React.FC = () => {
    // Assume temperature Celsius and show wind are checked in default
    const [ isCelsius , setIsCelsius ] = useState(true as boolean);
    const [ showWind, setShowWind ] = useState(true as boolean)

    return (
        <div className="editor">
            <div className="editor__container">

                <div className="editor__edit-panel">
                    <div className="editor__control-field">
                        <span className="eidtor__control-label">Title</span>
                        <input 
                            type="text" 
                            className="editor__text-input" 
                            placeholder="Title of widget" />
                    </div>
                    <div className="editor__control-field">
                        <span className="eidtor__control-label">Temperature</span>
                        <div className="editor__radio-group">
                            <label className="editor__radio-btn">
                                <input 
                                    type="radio" 
                                    className="editor__radio-input" 
                                    name="temperature" 
                                    defaultChecked={isCelsius}
                                    onChange={() => setIsCelsius(true)} />
                                <span className="editor__radio-icon" />
                                <span>&#176;C</span>
                            </label>
                            <label className="editor__radio-btn">
                                <input 
                                    type="radio" 
                                    className="editor__radio-input" 
                                    name="temperature"
                                    onChange={() => setIsCelsius(false)} />
                                <span className="editor__radio-icon" />
                                <span>&#176;F</span>
                            </label>
                        </div>
                    </div>
                    <div className="editor__control-field">
                        <span className="eidtor__control-label">Wind</span>
                        <div className="editor__radio-group">
                            <label className="editor__radio-btn">
                                <input 
                                    type="radio" 
                                    className="editor__radio-input"
                                     name="wind"
                                     defaultChecked={showWind}
                                     onChange={() => setShowWind(true)}  />
                                <span className="editor__radio-icon" />
                                <span>On</span>
                            </label>
                            <label className="editor__radio-btn">
                                <input 
                                    type="radio" 
                                    className="editor__radio-input" 
                                    name="wind"
                                    onChange={() => setShowWind(false)} />
                                <span className="editor__radio-icon" />
                                <span>Off</span>
                            </label>
                        </div>
                    </div>
                </div>

                <span className="editor__verticle-divider" />

                <div className="editor__display-panel">
                    <div style={{height: '100%', width: '100%', backgroundColor: 'red'}}></div>
                </div>
            </div>
        </div>
    )
}

export default Editor
