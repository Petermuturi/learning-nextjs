import Link from 'next/link';


const listStyle = {
	marginRight:15
}

export default()=>

<div>
	<Link href='/'>
		<a style={listStyle}>Home</a>
	</Link>
	<Link href='/about'>
		<a style={listStyle}>About</a>
	</Link>
</div>