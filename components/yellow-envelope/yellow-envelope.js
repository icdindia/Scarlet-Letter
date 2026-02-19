
import dynamic from "next/dynamic";

import parse from 'html-react-parser';
import Link from 'next/link'

// const FetchNewsletter = dynamic (() => import("./fetch-newsletter/newsletter"));



import style from '../posts/posts.module.scss'

export default function yellowEnvelop({ edges }) {




    var htmlString = ''
    return <>

        <section className={`${style.posts__page} mT__260 page__header posts__page `}>
            <div className="container page__header--container">
                <div className="row">
                    <div className="col-12 col-md-4 page__header--title">
                        <div className="back-cta"><h1>The Scarlet Letter*</h1></div>
                    </div>
                    <div className="col-12 col-md-8 page__header--nav bottom__align nav__subPage tags-menu category-names">
                        <div className={style.filter_menu_cont}>
                            {/* {common}
                        {slug} */}
                        </div>
                    </div>
                </div>
                <span className="bottom__border"></span>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="row infinite-grid">
                    {edges.map(({ node }) => {
                        // <FetchNewsletter data={node} key={node.id}/>
                        var date = new Date(node.date).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                        });
                        htmlString = node?.content
                        if (htmlString) {
                            var stripedHtml = htmlString?.replace(/<[^>]+>/g, ' ');
                            var content = stripedHtml?.substr(0, 500);
                        } else {
                            content = "...."
                        }
                        return (
                            <div className="col-md-4 col-lg- grid-item" key={node.id}>
                                <div className={`${style.postsItems} animateItems}`}>
                                    <Link href={`/yellow-envelope/${node.slug}`}>
                                        <h2 className={style.postTitle}>{node.title}</h2>
                                        <span className={style.postBy}> {date}  </span>
                                        <div className={style.postInfo}> <p> {parse(content)} </p> </div>
                                    </Link>
                                    <div className="row">
                                        <div className="col-6">
                                            <Link href={`/yellow-envelope/${node.slug}`} legacyBehavior>
                                                <button>read letter</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    </>;
}