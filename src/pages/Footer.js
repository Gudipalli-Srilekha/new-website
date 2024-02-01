import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
            <footer class="site-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <h6>Neuzy</h6>
                            <p>Ament minim mollit non deserunt uilamco est sit alliqua dolor do amet sint. Velt officia consequat duis enium velit mollit.</p>
                            
                        </div>
                        
                        
                        <div class="col-12 col-md-3">
                            <h6>world</h6>
                               <ul class="footer-links">
                                  <li><a href="#">business</a></li>
                                  <li><a href="#">general</a></li>
                                  <li><a href="#">Sport</a></li>
                                  <li><a href="#">entertainment</a></li>
                                  <li><a href="#">science</a></li>
    
                                 </ul>
                        </div>
                        {/* <div class="col-12 col-md-3">
                           <h6>Magezine</h6>
                                <ul class="footer-links">
                                   <li><a href="#">Fasion</a></li>
                                   <li><a href="#">Blogger</a></li>
                                   <li><a href="#">People</a></li>
    
                                </ul>
                     </div> */}
                       {/* <div class="col-12 col-md-3">
                            <h6>Other</h6>
                                <ul class="footer-links">
                                  <li><a href="#">About</a></li>
                                  <li><a href="#">Contact us</a></li>
                                  <li><a href="#">Terms & Conditionns</a></li>
        
                                 </ul>
                        </div> */}
                        <hr class="small"></hr>
                    </div>
                    <div class="container">
                    <div class="row">
                    <div class="col-md-8 col-sm-6 col-12">
                      <p class="copyright-text">Copyright © Neuzy All Rights Reserved</p>

                      
                    </div>
                       <div class="col-md-4 col-sm-6 col-12">
                       <div className="footer-icons">
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div>
</div>
</div>
</div>
</div>
</footer>
    )
    }
export default Footer