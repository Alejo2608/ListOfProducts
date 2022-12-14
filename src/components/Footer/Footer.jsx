import React from "react";
import { Link } from "react-router-dom";
import style from "../../css/footer.module.css";

export default function Footer(){
    

    return(
        <div className={style.footer}>
            <div className={style.footer_item}>
                <div>
                    <div>
                        <h4>ListOfProducts</h4>
                        <i className="fa-solid fa-earth-americas"></i>
                        </div>
                    <div className={style.footer_content}>
                        <p>Venezuela</p>
                    </div>
                </div> 
            </div>
            <div className={style.footer_item}>
                <div>
                    <div>
                    <h4>¿Quiénes somos?</h4>
                    <i class="fa fa-users"></i>
                    </div>
                    <div className={style.footer_content}>
                        <p><Link to="/team">El equipo</Link></p>
                    </div>
                </div> 
            </div>
            <div className={style.footer_item}>
                <div className={style.footer_social}>
                    <span className={style.footer_icons}><i className="fa-brands fa-facebook"></i></span>
                    <span className={style.footer_icons}><i className="fa-brands fa-github"></i></span>
                    <span className={style.footer_icons}><i className="fa-brands fa-linkedin"></i></span>
                    <span className={style.footer_icons}><i className="fa-brands fa-spotify"></i></span>
                </div> 
            </div>
        </div>
    );
};
