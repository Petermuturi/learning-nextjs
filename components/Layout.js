import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

export default({content})=>
	<div>
		<div style={layoutStyle}>
	    <Header />
	    {content}
	  </div>
	</div>