class ButtTime extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		return(
		<div>
			<div className= "row">
				<div className="col-sm-4">
				</div>
				<div className={'col-sm-4 ' + this.props.buttTime + "-container"}>
					<p> Butts  {this.props.buttTime}: </p>
					{this.props.butts ? this.props.butts.length: 0}
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