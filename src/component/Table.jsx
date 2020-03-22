import {h, Component} from 'preact';

import './Table.scss';

function formatSeconds(seconds) {
    var measuredTime = new Date(null);
    measuredTime.setSeconds(seconds);
    return measuredTime.toISOString().substr(14, 5);
}

export class Table extends Component {
    constructor({ size }) {
        super();

        const cells = new Array(size * size);
        for (let i = 0; i < cells.length; ++i) {
            cells[i] = {
                number: i + 1,
                order: Math.random()
            }
        }
        cells.sort((a, b) => a.order - b.order);
        this.state = {
            cells,
            next: 1,
            mistakes: 0,
            seconds: 0,
            finished: false
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                seconds: this.state.seconds + 1
            });

        }, 1000)
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }


    itemClicked = (e) => {
        if (this.state.finished) {
            return;
        }
        const itemNumber = parseInt(e.target.getAttribute('data-number'));
        const { size } = this.props;
        if (itemNumber === this.state.next) {
            this.setState({
                next: this.state.next + 1
            });
            if (itemNumber === size * size) {
                this.finishTask();
            }
        } else {
            this.setState({
                mistakes: this.state.mistakes + 1
            });
        }
    };

    finishTask() {
        console.log('Table is finished!');
        clearInterval(this.interval);
        this.interval = null;
        this.setState({
            finished: true
        })
    }

    render({ size}, { cells, next, mistakes, seconds, finished }) {
        const tableStyle = {
            gridTemplateColumns: `repeat(${size}, 110px)`,
            gridTemplateRows: `repeat(${size}, 110px)`,
        };

        return (
            <div>
                {
                    finished ? (
                        <div className='status'>
                            <span style={{color: 'green'}}>You finished this table!</span>&nbsp;
                            Your time: {formatSeconds(seconds)}&nbsp;
                            Mistakes: {mistakes}
                        </div>
                    ) : (
                        <div className='status'>
                            Next: {next}&nbsp;
                            Mistakes: {mistakes}&nbsp;
                            Time: {formatSeconds(seconds)}
                        </div>
                    )
                }


                <div class='table' style={tableStyle} >
                    {cells.map(cell => {
                        let className = 'cell';
                        if (!finished) {
                            if (cell.number === next) {
                                className += ' right'
                            } else {
                                className += ' wrong'
                            }
                        }

                        return (
                            <div
                                class={className}
                                key={cell.number}
                                data-number={cell.number}
                                onClick={this.itemClicked}
                            >
                                {cell.number}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

