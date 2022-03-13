import Image from "next/image";
import dynamic from "next/dynamic";

import { Container, Row, Col } from "react-bootstrap";
import { ParallaxProvider ,Parallax} from "react-scroll-parallax";

import Layout from "../../components/layout/Layout";

import privacyStyles from "./Privacy.module.scss";

const ParallaxCache = dynamic(
  () => {
      return import("../../components/parallaxCache/parallaxCache");
  },
  { ssr: false }
);


export default function Privacy() {
  return (
    <Layout>
       <ParallaxProvider>
        <ParallaxCache/>
      </ParallaxProvider>
    <Container>
      <section className={privacyStyles.main}>
        <div>
          <h1>PRIVACY POLICY</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
            consectetur eget tincidunt cursus praesent. Proin duis risus tortor
            ipsum ipsum mauris. Ridiculus quisque cursus quisque nisl elementum
            elementum.
          </p>
        </div>
        <div>
          <h2>SECTION TITLE</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nulla
            pretium eget fames porta in. Luctus commodo purus commodo morbi
            urna, facilisi. Mauris et vitae proin faucibus lacus sit. In enim
            egestas sed in faucibus. Aliquam imperdiet mauris a morbi sed
            nullam. Et ut urna vulputate dignissim eget. Sollicitudin quam vel
            vestibulum nibh fusce erat egestas purus. Sit purus suspendisse sit
            id diam aliquam turpis in a. Et rhoncus aliquet pharetra gravida
            augue purus turpis sed. Ultricies tristique non lorem nisi egestas.
            Auctor massa interdum aenean ultrices dictumst imperdiet sit. Fames
            at sagittis arcu, in enim platea mi massa.
            <br />
            <br />
            Facilisis malesuada sed ornare at urna hac fermentum. Massa amet,
            habitant risus a nec tempor, pretium elit. Feugiat diam et amet
            mauris ac, senectus. Cursus a posuere tristique posuere. Cras
            ullamcorper lorem leo, ipsum adipiscing tristique eu vitae sed.
            Scelerisque laoreet diam donec purus. Amet gravida tortor cras
            egestas arcu diam imperdiet tempor. Cursus erat duis mattis nulla
            bibendum lectus quam egestas urna. Adipiscing netus donec elementum
            egestas ullamcorper rhoncus lorem. Eget vestibulum non volutpat
            nulla vitae tincidunt sapien. Molestie diam sed turpis ac ut. Nunc
            tortor pulvinar aliquet erat vitae.
          </p>
            <ul>
                <li>
                Ac fames orci vitae nunc, lobortis montes,
                pellentesque arcu enim.
                </li>
                <li>
                Ornare accumsan sit egestas luctus tortor quam
                scelerisque at.
                </li>
                <li>
                Tellus eu, sit non tempus in libero volutpat et
                pellentesque.
                </li>
                <li>
                Ac fames orci vitae nunc, lobortis montes,
                pellentesque arcu enim.
                </li>
                <li>
                Ornare accumsan sit egestas luctus tortor quam
                scelerisque at.
                </li>
                <li>
                Tellus eu, sit non tempus in libero volutpat et
                pellentesque.
                </li>
            </ul>
        </div>
        <div>
        <h2>SECTION TITLE</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nulla
            pretium eget fames porta in. Luctus commodo purus commodo morbi
            urna, facilisi. Mauris et vitae proin faucibus lacus sit. In enim
            egestas sed in faucibus. Aliquam imperdiet mauris a morbi sed
            nullam. Et ut urna vulputate dignissim eget. Sollicitudin quam vel
            vestibulum nibh fusce erat egestas purus. Sit purus suspendisse sit
            id diam aliquam turpis in a. Et rhoncus aliquet pharetra gravida
            augue purus turpis sed. Ultricies tristique non lorem nisi egestas.
            Auctor massa interdum aenean ultrices dictumst imperdiet sit. Fames
            at sagittis arcu, in enim platea mi massa.
            <br />
            <br />
            Facilisis malesuada sed ornare at urna hac fermentum. Massa amet,
            habitant risus a nec tempor, pretium elit. Feugiat diam et amet
            mauris ac, senectus. Cursus a posuere tristique posuere. Cras
            ullamcorper lorem leo, ipsum adipiscing tristique eu vitae sed.
            Scelerisque laoreet diam donec purus. Amet gravida tortor cras
            egestas arcu diam imperdiet tempor. Cursus erat duis mattis nulla
            bibendum lectus quam egestas urna. Adipiscing netus donec elementum
            egestas ullamcorper rhoncus lorem. Eget vestibulum non volutpat
            nulla vitae tincidunt sapien. Molestie diam sed turpis ac ut. Nunc
            tortor pulvinar aliquet erat vitae.
          </p>
        </div>
        <div>
        <h2>SECTION TITLE</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nulla
            pretium eget fames porta in. Luctus commodo purus commodo morbi
            urna, facilisi. Mauris et vitae proin faucibus lacus sit. In enim
            egestas sed in faucibus. Aliquam imperdiet mauris a morbi sed
            nullam. Et ut urna vulputate dignissim eget. Sollicitudin quam vel
            vestibulum nibh fusce erat egestas purus. Sit purus suspendisse sit
            id diam aliquam turpis in a. Et rhoncus aliquet pharetra gravida
            augue purus turpis sed. Ultricies tristique non lorem nisi egestas.
            Auctor massa interdum aenean ultrices dictumst imperdiet sit. Fames
            at sagittis arcu, in enim platea mi massa.
            <br />
            <br />
            Facilisis malesuada sed ornare at urna hac fermentum. Massa amet,
            habitant risus a nec tempor, pretium elit. Feugiat diam et amet
            mauris ac, senectus. Cursus a posuere tristique posuere. Cras
            ullamcorper lorem leo, ipsum adipiscing tristique eu vitae sed.
            Scelerisque laoreet diam donec purus. Amet gravida tortor cras
            egestas arcu diam imperdiet tempor. Cursus erat duis mattis nulla
            bibendum lectus quam egestas urna. Adipiscing netus donec elementum
            egestas ullamcorper rhoncus lorem. Eget vestibulum non volutpat
            nulla vitae tincidunt sapien. Molestie diam sed turpis ac ut. Nunc
            tortor pulvinar aliquet erat vitae.
          </p>
        </div>
      </section>
    </Container>
    </Layout>
  );
}
