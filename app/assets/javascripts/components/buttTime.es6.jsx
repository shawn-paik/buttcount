class ButtTime extends React.Component {
	constructor(props){
		super(props)
	this.buttDigits = this.buttDigits.bind(this)
	}


	buttDigits(butts){
		var buttElements = []
		var buttString = butts + "";
		console.log(buttString)
		buttArray = buttString.split("");
		console.log(buttArray)
		for (var i=0; i < buttArray.length; i++) {
			buttElements.push(<button className="buttButton">{buttArray[i]}</button>)
		}
		return buttElements
	}
	// componentDidMount(){
	// 	debugger
	// }

	render(){
		return(
		<div className="buttTime-container">
			<div className= "row">
				<div className="col-sm-4">
				</div>
				<div className={'col-sm-4 ' + this.props.buttTime + "-container"}>
					
					{this.props.buttTime === 'total' || this.props.buttTime==='today' ? (
							<p> Butts  {this.props.buttTime}: </p>
						): (
							<p> Butts this {this.props.buttTime}: </p>
						)}
					<div className="butt-digits odometer">
						{this.buttDigits(this.props.butts.length)}
					</div>
					<br></br>
					<input type="button" name="decrease" value="-" onClick={this.props.minus}/>
					<input type="button" name="increase" value="+" onClick={this.props.add}/>
				</div>
				<div className = "col-sm-4">
				</div>
			</div>
		</div>
		)
	}
}