import Link from "next/link";
import { ActionLink } from "@/components/action-link";
import { Arrow } from "@/components/arrow";
import { Photo } from "@/components/photo";
import { SectionHeading } from "@/components/section-heading";
import { Tagline } from "@/components/tagline";
import { images, site } from "@/content/site";
import { partners } from "@/content/partners";
import Image from "next/image";
import type { CSSProperties } from "react";
import { withBasePath } from "@/content/base-path";

export default function Home() {
  return (
    <>
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy">
          <Tagline index="AR" language="ko" className="hero-tagline">사람과 예술이 만나는 길, 아트로드</Tagline>
          <h1 id="hero-title">문화예술로<br /><span>길을 만듭니다.</span></h1>
          <p className="hero-description">{site.intro}</p>
          <div className="hero-actions"><ActionLink href="#projects">우리의 활동 보기</ActionLink><ActionLink href="#contact" variant="text" diagonal>협업 문의</ActionLink></div>
        </div>
        <figure className="hero-figure">
          <Photo image={images.hero} sizes="(max-width: 900px) 100vw, 52vw" preload />
          <figcaption><span>강남구 청년 문화예술단체 지원사업</span><span className="image-index">ARTROAD — SCENE 01</span></figcaption>
        </figure>
        <div className="hero-bottom"><span>CULTURE, ARTS & PEOPLE</span><a href="#about">아트로드를 만나다<span aria-hidden="true">↓</span></a></div>
      </section>

      <section className="about section" id="about" aria-labelledby="about-title" tabIndex={-1}>
        <div className="container">
          <div className="about-heading">
            <SectionHeading id="about-title" index="01" eyebrow="ABOUT ARTROAD" title={site.about.title} />
          </div>
          <div className="about-story">
            <figure className="about-photo">
              <Photo className="photo--arch-top-right" image={images.duet} sizes="(max-width: 700px) 100vw, 52vw" />
              <figcaption>강남구 청년 문화예술단체 지원사업</figcaption>
            </figure>
            <div className="about-copy">
              <p>{site.about.description}</p>
              <p>{site.about.mission}</p>
              <span className="founded">{site.about.founded}</span>
            </div>
          </div>
          <div className="values">
            <div className="values-heading">
              <h3 id="about-values-title"><Tagline as="span" compact language="ko">우리가 함께 걷는 방식</Tagline></h3>
              <p className="values-note">사람 · 문화예술 · 가능성을 연결합니다.</p>
            </div>
            <ol className="values-list" aria-labelledby="about-values-title">
              {site.about.values.map((value, index) => <li className="value" key={value}><span aria-hidden="true">0{index + 1}</span><p>{value}</p></li>)}
            </ol>
          </div>
          <section className="partner-strip" aria-labelledby="partners-title">
            <div className="partner-strip-heading"><h3 id="partners-title">협력 파트너</h3></div>
            <ul className="partner-logos">{partners.map(partner => <li key={partner.name} style={{ "--logo-width": `${partner.displayWidth}px` } as CSSProperties}><Image src={withBasePath(partner.logo)} alt={partner.name} width={partner.width} height={partner.height} sizes="(max-width: 700px) 40vw, 230px" /></li>)}</ul>
          </section>
        </div>
      </section>

      <section className="business section container" id="business" aria-labelledby="business-title" tabIndex={-1}>
        <div className="section-top"><SectionHeading id="business-title" index="02" eyebrow="WHAT WE DO" title={"무대에서 일상까지,\n예술이 이어지는 네 가지 길."} /><p className="section-aside">창작과 만남, 배움과 협력.<br />문화예술이 필요한 곳에 함께합니다.</p></div>
        <div className="business-layout">
          <article className="business-feature">
            <div className="business-feature-copy"><Tagline compact index={site.businesses[0].number}>{site.businesses[0].english}</Tagline><h3>{site.businesses[0].title}</h3><p>{site.businesses[0].description}</p><ul className="tags">{site.businesses[0].examples.map(example => <li key={example}>{example}</li>)}</ul></div>
            <Photo className="photo--arch-bottom-right" image={images.haegeum} sizes="(max-width: 700px) 100vw, 40vw" />
          </article>
          <div className="business-list">{site.businesses.slice(1).map(item => <article className="business-row" key={item.number}><div><Tagline compact index={item.number}>{item.english}</Tagline><h3>{item.title}</h3><p>{item.description}</p><ul className="tags">{item.examples.map(example => <li key={example}>{example}</li>)}</ul></div></article>)}</div>
        </div>
      </section>

      <section className="projects section" id="projects" aria-labelledby="projects-title" tabIndex={-1}>
        <div className="container">
          <div className="section-top"><SectionHeading id="projects-title" index="03" eyebrow="OUR SCENES" title={"우리가 만나온 무대"} /><div className="section-aside"><p>공연장과 공원, 그리고 일상 속 공간.<br />사람과 예술이 만났던 순간들입니다.</p><ActionLink href="/archive" variant="text" diagonal>전체 아카이브 보기</ActionLink></div></div>
          <div className="project-grid">{site.projects.map((project, index) => <article className="project" key={project.slug}>
            <Link className="project-record" href={`/archive/${project.slug}`} aria-labelledby={`home-${project.slug}`}>
              <figure><Photo className={index % 2 ? "photo--arch-top-right" : ""} image={project.image} sizes="(max-width: 700px) 100vw, 48vw" /><figcaption className="photo-label"><Tagline compact as="span" index={`0${index + 2}`}>SCENE</Tagline></figcaption></figure>
              <p className="project-meta">{project.meta}</p><h3 id={`home-${project.slug}`}>{project.title}</h3><p className="project-description">{project.description}</p><span className="archive-read-more">기록 보기<Arrow /></span>
            </Link>
          </article>)}</div>
          <div className="history"><div className="history-heading"><h3>아트로드의 발자취</h3><p>2025년 주요 선정 이력</p></div><ol>{site.history.map(item => <li key={item.title}><time dateTime={item.date.replace(".", "-")}>{item.date}</time><Link className="history-name" href={`/archive/${item.slug}`}>{item.title}</Link><span className="history-detail">{item.detail}</span></li>)}</ol></div>
        </div>
      </section>

      <section className="artists section container" id="artists" aria-labelledby="artists-title" tabIndex={-1}>
        <div className="section-top"><SectionHeading id="artists-title" index="04" eyebrow="PEOPLE OF ARTROAD" title={"서로 다른 예술,\n함께 만드는 하나의 무대."} /><div className="section-aside"><p>배우, 연주자, 무용가와 함께<br />각자의 고유함을 무대 위에 펼칩니다.</p><div className="artist-section-actions"><ActionLink href="/artists" variant="text" diagonal>아티스트 소개 보기</ActionLink><ActionLink href="#contact" variant="text" diagonal>아티스트 협업 문의</ActionLink></div></div></div>
        <div className="artist-fields">{site.artistFields.map(field => <div className="artist-field" key={field.english}><Tagline compact as="span">{field.english}</Tagline><h3>{field.title}</h3><p>{field.description}</p></div>)}</div>
        {site.artists.length > 0 && <div className="artist-profiles">{site.artists.filter(artist => artist.publicationApproved).map(artist => <article key={artist.name}><Photo image={artist.image} sizes="(max-width: 700px) 100vw, 25vw" /><Tagline compact language="ko">{artist.role}</Tagline><h3>{artist.name}</h3><p>{artist.bio}</p></article>)}</div>}
      </section>

      <section className="contact section" id="contact" aria-labelledby="contact-title" tabIndex={-1}>
        <div className="container contact-inner">
          <div><Tagline index="05">LET’S MAKE A ROAD</Tagline><h2 id="contact-title">{site.contact.title}</h2><p className="contact-description">{site.contact.description}</p><ul className="contact-topics">{site.contact.topics.map(topic => <li key={topic}>{topic}</li>)}</ul></div>
          <div className="contact-action"><p>함께할 이야기를 기다립니다.</p><a className="email-link" href={site.contact.mailto}>{site.contact.email}<Arrow diagonal /></a><ActionLink href={site.contact.mailto} variant="light" diagonal>이메일로 협업 문의</ActionLink><p className="contact-note">일정과 장소, 원하시는 활동을 함께 알려주시면 좋습니다.<br />버튼을 누르면 사용 중인 이메일 앱이 열립니다.</p></div>
        </div>
      </section>
    </>
  );
}
