import React, {Component} from 'react';

const Problematic = () => {
    throw (new Error('버그가 나타났다!'));
    return (
      <div>
      </div>
    );
  };

class Counter extends Component {
    state = {
        number : 0
    }

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 5 의 배수라면 리렌더링 하지 않음
        console.log('shouldComponentUpdate');
        if (nextState.number % 5 === 0) return false;
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }

    handleIncrease = () => {
        // this.setState(
        //     // 방법 1.
        //     // number : this.state.number + 1

        //     // 방법 2.
        //     // (state) => ({
        //     //     number: state.number
        //     // })

        //     // 방법 3. 비구조화 할당 
        //     // ({number}) => ({
        //     //     number : number + 1
        //     // })
        // );
        // 방법 4.
        const { number } = this.state;
        this.setState({
            number: number + 1
        })
    }

    handleDecrease = () => {
        this.setState(
            // number : this.state.number - 1.
            ({number}) => ({
                number: number - 1
            })
        );
    }

    componentDidCatch(error, info) {
        this.setState({
            error: true
        });
    }

    render(){
        if (this.state.error) return (<h1>에러발생!</h1>);
        return (
            <div>
                <h1>카운터</h1>
                { this.state.number === 4 && <Problematic /> }
                <button onClick={this.handleIncrease}>+</button>
                <div>값 : {this.state.number}</div>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
};

export default Counter;