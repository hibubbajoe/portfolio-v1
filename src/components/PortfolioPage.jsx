import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import '../styles/portfolio-page.css'
import RevealerNav from './RevealerNav';

const PortfolioPage = () => {


    return (
        <div>
            <RevealerNav />
            <div class="portfolio-page">
                <div className="portfolio-display">
                    <div className="menu__item">
                        <a href="#" className="menu__item-link">Home</a>
                        <img class="menu__item-img" src="https://internationalnewsagency.org/wp-content/uploads/2021/07/Mob-Psycho-100-1.jpg" alt="" />
                        <div class="marquee">
                            <div class="marquee__inner">
                                <span>Portfolio Item 1 - Portfolio Item 1 - Portfolio Item 1 - Portfolio Item 1 - Portfolio Item 1</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="portfolio-container">
                    <div class="portfolio__item">
                        <a class="portfolio__item-link">Portfolio Item 1</a>
                        <img class="portfolio__item-img" src="https://internationalnewsagency.org/wp-content/uploads/2021/07/Mob-Psycho-100-1.jpg" alt="" />
                        <div class="marquee">
                            <div class="marquee__inner">
                                <span>Portfolio Item 1 - Portfolio Item 1 - Portfolio Item 1 - Portfolio Item 1 - Portfolio Item 1</span>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio__item">
                        <a class="portfolio__item-link">Portfolio Item 2</a>
                        <img class="portfolio__item-img" src="https://1.bp.blogspot.com/-Oi1sZtnOMcQ/XIu5uyWC7II/AAAAAAAAECU/nczY2f_kfXgtSPq_Gc6KVOq2mwJLNCkvQCKgBGAs/w3840-h2400-c/shigeo-kageyama-rage-mob-psycho-uhdpaper.com-4K-1.jpg" alt="" />
                        <div class="marquee">
                            <div class="marquee__inner">
                                <span>Portfolio Item 2 - Portfolio Item 2 - Portfolio Item 2 - Portfolio Item 2 - Portfolio Item 2</span>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio__item">
                        <a class="portfolio__item-link">Portfolio Item 3</a>
                        <img class="portfolio__item-img" src="https://i.redd.it/151bnsmibaz21.jpg" alt="" />
                        <div class="marquee">
                            <div class="marquee__inner">
                                <span>Portfolio Item 3 - Portfolio Item 3 - Portfolio Item 3 - Portfolio Item 3 - Portfolio Item 3</span>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio__item">
                        <a class="portfolio__item-link">Portfolio Item 4</a>
                        <img class="portfolio__item-img" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bfdf36ee-9707-4809-8f87-67b882950b82/dd0qp2h-f5643c7f-23ce-4a88-9b52-e28eea9e823b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JmZGYzNmVlLTk3MDctNDgwOS04Zjg3LTY3Yjg4Mjk1MGI4MlwvZGQwcXAyaC1mNTY0M2M3Zi0yM2NlLTRhODgtOWI1Mi1lMjhlZWE5ZTgyM2IuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.SIM1hs5uwI9-0yaJ49P8Jw7m0XzBYkUKkdDLO4C5ebg" alt="" />
                        <div class="marquee">
                            <div class="marquee__inner">
                                <span>Portfolio Item 4 - Portfolio Item 4 - Portfolio Item 4 - Portfolio Item 4 - Portfolio Item 4</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PortfolioPage;