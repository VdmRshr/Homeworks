import React, {Component} from "react";
import Box from "@material-ui/core/Box";

export default class ChessBoard extends Component {

    state = {
        flag: true,
        board: []
    };

    componentDidMount() {
        this.getBoard()
    }

    getBoard = () => {

        let board = [];
        let key = 8;
        let {flag} = this.state;

        for (let i = 0; i < 8; i++) {
            let row = [];
            for (let j = 0; j < 8; j++) {
                if (j === 0) flag = !flag;
                key = key + 1;

                row.push(flag ? <Box key={key} style={{width: '100px', height: '100px', background: '#000000'}}></Box> :
                    <Box key={key} style={{width: '100px', height: '100px', background: '#c0ff63'}}></Box>)
                flag = !flag;

            }
            board.push(<Box key={i} display='flex'>{row}</Box>)
        }
        this.setState({board: board});

    };

    render() {
        const {board} = this.state;
        return (
            <Box>
                {board.map((cells) => cells)}
            </Box>
        );
    }
}
