import React, { Component } from 'react';


export default class Form extends Component {

    render() {
        const { title, items, buttons, className } = this.props;

        return (
            <div className={"form " + (className? className: "")}>
                <div className="title">{ title }</div>
                <div className="content">
                    {
                        items.map((item, i) => {
                            return (
                                <div className="item" key={ i }>
                                    { item }
                                </div>
                            )
                        })
                    }
                </div>
                {
                    (buttons) &&
                    (<div className="footer">
                        {
                            buttons.map((button, index) => (<div key={ index }>{ button }</div>))
                        }
                    </div>)
                }
            </div>
        )

    }
}