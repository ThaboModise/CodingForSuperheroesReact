import "./FooterDiv.css";

export default function FooterDiv(props) {

  return (
    <footer>
		<div id="footer-icons">
			<a href="https://www.instagram.com/thabo_coding4superheroes/" className="footer-icons fa-brands fa-instagram"></a>
			<a href="https://twitter.com/ThaboMode" className="footer-icons fa-brands fa-twitter"></a>
			<a href="https://www.youtube.com/channel/UCGSndAimlzGGzR-bruasOzw" className="footer-icons fa-brands fa-youtube"></a>
		</div>
		<div id="copywrite-div">
			<h2 id="copywrite-text">All materials &copy; Coding4Superheroes 2020 </h2>
		</div>
	</footer>
  )
}
