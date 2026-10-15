# Xufang PANG · 庞旭芳 — Academic Homepage

This Jekyll site contains Xufang PANG’s profile, publications, research projects, and CV.
Content is transcribed from the supplied saved Weebly pages. Existing information not covered by those pages is retained, including the current affiliation, research biography, portrait, news, blog, and showcase.

## Home V2 preview

`homeV2.html` is an alternative homepage; the original `index.html` and profile data remain intact. Edit `_data/profile_v2.json` and `_data/home_v2.json` to maintain the preview. Shared profile and experience widgets accept an optional `profile` argument. V2 omits template news. Grant dates are shown without asserting current status or unspecified funding attribution. Talent titles use the supplied Chinese names; company name, exact employment dates, award years, and grant closeout status remain to be confirmed. The NSFC project heading is a descriptive rendering of the supplied title and should be checked against the award notice before formal use.

## Maintaining this site

- Profile, education, experience, awards: `_data/profile.yml`.
- Publications: `_publications/<year>/*.md`; project details: `projects/`.
- Paper covers follow the saved publication page: Upright-Net → `fast-forward.png`; calibration → `_1418476575.png`; quad meshing → `5288831.png`; 3D fingerprint → `3460937.png`; 2010 valley/ridge → `8782284.png`. Published copies use descriptive filenames without leading underscores.
- Citation popups: `_data/citations.json` stores BibTeX, APA and IEEE text keyed by the exact publication title. Update this data when adding or renaming papers. The calibration paper citation uses its final journal year (2016); the existing publication-list year is retained.
- Manga project resources are linked from the authors’ City University of Hong Kong pages and Ying Cao’s original project page. DynamicManga has no verified public code link; panel extraction links to the author-hosted RAR archive.
- Every publication has a PDF resource: open author/publisher PDFs where verified; the fingerprint and Upright-Net+ papers use IEEE PDF viewers (access may be required), and quad-dominant meshing uses the author-uploaded ResearchGate download page (sign-in/security checks may apply). Publisher DOI links remain separate from downloads.
- Curriculum vitae: `cv.html`; navigation: `_data/navigation.yml`.
- Run `bundle install`, then `bundle exec jekyll serve` to preview.
- The personal-site repository is `pangxufang/pangxufang.github.io`; the Git remote is `https://github.com/pangxufang/pangxufang.github.io.git`.
- `_config.yml` uses `url: "https://pangxufang.github.io"` and `baseurl: ""` to publish at `https://pangxufang.github.io/`. GitHub Pages should publish from `main`, `/ (root)`. A local folder name does not determine the published URL.
- Source pages disagree about the calibration paper’s year (publication page: 2014; CV: 2016). Its existing 2014 entry is retained pending confirmation. The Upright-Net+ title and author spelling follow the project page’s full citation.

The original template documentation and setup guidance are preserved below.

---

# academic-homepage

[!\[Preview](assets/images/etc/preview.png)](https://luost26.github.io/academic-homepage/)

[!\[pages-build-deployment](https://github.com/luost26/academic-homepage/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/luost26/academic-homepage/actions/workflows/pages/pages-build-deployment)
[!\[Hits](https://hits.sh/github.com/luost26/academic-homepage.svg?view=today-total)](https://hits.sh/github.com/luost26/academic-homepage/)
[!\[GitHub stars](https://img.shields.io/github/stars/luost26/academic-homepage)](https://github.com/luost26/academic-homepage)
[!\[GitHub forks](https://img.shields.io/github/forks/luost26/academic-homepage)](https://github.com/luost26/academic-homepage/forks)

<!--\\\[!\\\[W3C Validation](https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2Fluost26.github.io%2Facademic-homepage)](https://validator.nu/?doc=https%3A%2F%2Fluost26.github.io%2Facademic-homepage)-->

A GitHub Pages (Jekyll) template for personal academic website. Click [here](https://xufangpang.github.io/academic-homepage/) to see the demo.

## Variants

Explore alternative visual styles in their own repositories.

|Variant|Style|Preview|Links|
|-|-|-|-|
|Frutiger Aero|Vista-inspired frosted glass, glossy icons, and nature imagery.|<img src="assets/images/variants/frutiger-aero.jpg" alt="Frutiger Aero homepage screenshot" width="320">|[Repository](https://github.com/luost26/academic-homepage-frutiger-aero) · [Live demo](https://luost26.github.io/academic-homepage-frutiger-aero/)|
|Nostalgia 1990s|Windows 95/98-style silver bevels, native classic icons, and pixel-grid typography.|<img src="assets/images/variants/nostalgia-1990s.jpg" alt="Nostalgia 1990s homepage screenshot" width="320">|[Repository](https://github.com/luost26/academic-homepage-nostalgia-1990s) · [Live demo](https://luost26.github.io/academic-homepage-nostalgia-1990s/)|

## User Community

[🏡](https://luost.me/)
[:star:](https://cch1999.github.io/)
[:star:](https://kyrrego.github.io/)
[:star:](https://ced3-han.github.io/)
[:star:](https://lihengchen.com/)
[:star:](https://hpwang-whu.github.io/)
[:star:](https://zhang-yingyi.github.io/)
[:star:](https://wby24.github.io/)
[:star:](https://pengfeixu.com/)
[:star:](https://boqiuphd.github.io/)
[:star:](https://www.huabing.li/)
[:star:](https://xiecuiying.github.io/)
[:star:](https://hannyang.github.io/)
[:star:](https://king-play.github.io/)
[🤖](https://andrewcwlee.github.io)
[:star:](https://laiyao1.github.io)
[🌜](https://tmsultan.github.io)
[🚀](https://zaxguo.github.io)
[:gemini:](https://hongyang-du.github.io)
[:star:](https://thuanz123.github.io)
[🧬](https://gdalba.github.io/)
[:star:](https://yhhan.com/)
[🌔](https://chen-huaneng.github.io/academic)
[:star:](https://jwklee.github.io/)
[😼](https://onethousandwu.com/)
[🔬](https://kwen-chen.github.io/)
[🧑‍🔬](https://shengxiang-lin.github.io/)
[🗣️](https://henry-h22.github.io/)
[🍠](https://xingyuliuxyl.com/)

:hugs: Feel free to tell us if you are using this template for your website by creating an issue [here](https://github.com/luost26/academic-homepage/issues/new?assignees=&labels=&projects=&template=user-report.md&title=I+am+using+this+template%21).

### Acknowledgements

The improvements of this template have been inspired by the customizations and feedbacks from the following users:

* 😼 [onethousandwu.com](https://onethousandwu.com/): increased corner radius \[\[Repo]](https://github.com/oneThousand1000/oneThousand1000.github.io)
* :star: [shiwonkim.github.io](https://shiwonkim.github.io/): two-column main page layout \[\[Repo]](https://github.com/shiwonkim/shiwonkim.github.io)
* :star: [yqxie99.github.io](https://yqxie99.github.io/): blog feature \[\[Repo]](https://github.com/YQXie99/YQXie99.github.io/tree/feat/add\_blog\_page)
* :star: [kwen-chen.github.io](https://kwen-chen.github.io/): blog feature \[\[Repo]](https://github.com/Kwen-Chen/Kwen-Chen.github.io)

## Need Help?

If you run into **any** issues while using this template, or have suggestions for improvements, please don't hesitate to create an issue [here](https://github.com/luost26/academic-homepage/issues/new).

### FAQs

* [Need blogging feature?](https://github.com/luost26/academic-homepage/issues/13#issuecomment-2646371324)
* [How to show citation count for papers?](https://github.com/luost26/academic-homepage/issues/29#issuecomment-3222496187)



## Getting Started

1. First, click the "Use this template" button to create a new repository. The name of the repository should be `<your-github-username>.github.io` (click [here](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites) to learn more about naming a GitHub Pages repository).

### Running Locally (Debug \& Preview)

2. Follow the **step 1** and **step 2** of the instruction [here](https://jekyllrb.com/docs/) to install prerequisites and jekyll.
3. Clone your forked repository to your local machine.
4. Run the following command in the root directory of the repository:

```bash
   bundle exec jekyll serve
   ```

5. Browse to the displayed URL to see the website.



### Deploying to GitHub Pages

2. Go to the repository settings and enable GitHub Pages. Detailed instructions can be found [here](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site).
3. Navigate to your created website, and follow the instructions displayed on the homepage (if any) to finalize the setup.


## Google Scholar publication import (2026-10-15)

The supplied profile (`y8ZC-4MAAAAJ`) contained 35 records. Nine existing papers were retained; 19 dated papers and two undated manuscripts were added. Two patent records, the panel-extraction toolbox, a journal back-cover image, and supplementary material were excluded from the research-paper list. The two undated records appear under a separate manuscripts section without an invented publication year. Existing issue/online-year differences are preserved.

Imported metadata and source detail IDs are recorded in `_data/scholar_publication_sources.json`. Author names are normalized to consistent full-name spelling. New records retain the existing paper-card and three-format Citation interface. Publisher PDF endpoints can require institutional access; the prosthetic-vision paper links to the author copy indexed by Scholar, and highlight removal links to its preprint. The 2010 adaptive up-sampling paper currently links to the journal's full-text page because a direct PDF was not verified.

VideoSketcher uses the matching official repository's `assets/figure1.png` (https://github.com/lihuining/VideoSketcher). Other newly imported records use a clearly marked neutral graphical-abstract placeholder pending replacement with paper-specific figures. New papers are not automatically selected for the homepage.
