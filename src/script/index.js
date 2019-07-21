// List package root dependencies
import './hello.js';
import './copy-email.js';
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faInstagram, faLinkedin, faGithubAlt } from "@fortawesome/free-brands-svg-icons";

library.add(faInstagram, faLinkedin, faGithubAlt);
dom.watch();
