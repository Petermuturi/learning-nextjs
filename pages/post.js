import Header from '../components/Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

export default(props)=>
	<div style={layoutStyle}>
    <Header/>
		<h1>{props.url.query.title}</h1>
     <p>This is the blog post content.</p>
	</div>