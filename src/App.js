import React, { Component } from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    MenuItem,
    NavDropdown,
    Grid,
    Col,
    Row,
    PanelGroup,
    Panel,
} from 'react-bootstrap'

import './App.css';


class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar fixedTop={true}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#home">Immunoliposomes for Drug Delivery</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="#">
                            Structure
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            How they work
                        </NavItem>
                        <NavDropdown eventKey={3} title="Applications & Examples" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Traversing the Blood Brain Barrier</MenuItem>
                            <MenuItem eventKey={3.2}>Targeting Cancer Cells</MenuItem>
                            <MenuItem eventKey={3.3}>Targeting specific cell types - </MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.4}>Separated link</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={3} title="Challenges & Criticism" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Challenge: Immunogenicity</MenuItem>
                            <MenuItem eventKey={3.2}>Targeting Cancer Cells</MenuItem>
                            <MenuItem eventKey={3.3}>Targeting specific cell types - </MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.4}>Separated link</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={4} href="#">
                            References
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

class TempContent extends Component {
    render() {
        return (
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales urna nulla, sit amet cursus diam condimentum sed. Maecenas cursus sem quis velit molestie, sed ornare lacus fermentum. Donec sit amet eros ex. Morbi porta sem id tellus aliquet egestas. Donec ornare diam eu lacinia convallis. Nunc ultrices augue at nisl suscipit dignissim. Proin facilisis ultrices tellus, ut mattis enim auctor sit amet. Ut posuere porta urna ut lobortis. Phasellus vitae semper erat. Nunc sed urna eget nisi pharetra pretium a in odio.</p>
                <p>Donec nisl nunc, venenatis vitae urna ut, congue vehicula sem. Nam orci erat, elementum eu molestie facilisis, sollicitudin quis enim. Praesent consequat quam eu dolor varius, id ultricies dolor lacinia. Ut tempus blandit dui sed laoreet. Pellentesque vehicula, nisi sit amet fermentum semper, felis ipsum porttitor massa, eget tincidunt arcu magna eget ipsum. Suspendisse ultricies cursus ipsum eget tempor. Aliquam hendrerit commodo mauris. Duis ornare odio metus, scelerisque faucibus nisi malesuada ut. Vestibulum eu dolor id turpis semper laoreet. In placerat porta magna et sagittis. Aliquam vel lectus libero. In sagittis in elit non porta. Cras ornare tincidunt lacus. Quisque placerat sollicitudin nisl, ac efficitur felis dapibus at.</p>
                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras at ipsum molestie, gravida felis quis, suscipit neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut in vehicula magna. Etiam et lacus aliquet, interdum urna sed, tincidunt purus. Aliquam in nibh consequat, gravida velit sed, porta enim. Quisque bibendum, dui at tincidunt feugiat, nisl ante accumsan diam, nec interdum diam tortor nec metus. Pellentesque euismod malesuada felis sed mollis. Etiam orci augue, mattis id arcu et, rhoncus tristique dui. Nulla tempus sem sit amet ligula faucibus, sit amet vulputate sem viverra. In quis dapibus mi.</p>
                <p>Sed posuere volutpat justo, ac tincidunt neque faucibus non. Quisque commodo dignissim ipsum quis convallis. Integer consectetur risus nec lacus pellentesque, ac feugiat arcu bibendum. Aliquam erat volutpat. Nullam ullamcorper dui sem, eget vehicula augue luctus eu. Nam imperdiet urna vel sapien placerat sagittis. Nulla malesuada erat eu leo accumsan venenatis. Aliquam rhoncus leo ligula, eu venenatis tortor viverra et. Nullam lacinia nisi a magna dignissim commodo. In tristique faucibus purus, ut varius nunc lacinia in. Donec vel aliquam nunc. Sed urna nibh, malesuada vitae lectus sed, maximus maximus erat. Etiam ut nisl at ligula tempor hendrerit sed ornare tellus. Etiam ultrices tristique arcu hendrerit euismod. </p>
                <p>Proin elementum massa ex, a fermentum est dictum ac. Nullam euismod lorem non erat lacinia consectetur. Nunc tellus velit, malesuada at ipsum consectetur, tincidunt tempus dui. Duis commodo nisl et magna scelerisque dapibus. Donec ultricies quam eu maximus egestas. Nunc tincidunt arcu ac eros pulvinar, ullamcorper eleifend leo laoreet. Curabitur ipsum neque, posuere sit amet nisl ut, aliquam maximus nisl. Nam nec erat vitae lacus bibendum hendrerit. Curabitur vitae luctus libero, placerat egestas purus. Ut eu semper lectus. Vivamus felis mi, imperdiet in aliquet ac, rhoncus non velit. Aenean placerat tincidunt quam, sed viverra sem iaculis eu. In ac quam condimentum, luctus est vitae, elementum metus. Donec in fermentum magna.</p>
            </div>
        );
    }
}


class OverviewSection extends Component {
    render() {
        return (
            <p className="overview">Liposomes are small vesicles made out of a similar lipid bi-layer to cell membranes. They are used extensively in drug delivery, cosmetics and basic molecular biology research. By conjugating monoclonal antibodies or antibody fragments to the membrane liposomes become immunoliposomes. The antibodies can be selected to bind with membrane bound receptors or other ligands of interest. In this website we will focus on their application for target delivery of drugs to address disease.</p>
        );
    }
}
class StructureSection extends Component {
    render() {
        return (
            <div className="structure">
                <Row>
                    <Col md={12}>
                        <h4>Structure</h4>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <PanelGroup accordion id="accordion-example">
                            <Panel eventKey="1">
                                <Panel.Heading>
                                    <Panel.Title toggle>Phospholipid bilayer</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>
                                    <p>The lipid membrane serves as a barrier. Liposomes can be grouped into "unilamellar" or "multilamellar" where they contain 
                        one or multiple phospholipid bilayers in respectively (Mazafari 2005).</p>
                                </Panel.Body>
                            </Panel>
                            <Panel eventKey="2">
                                <Panel.Heading>
                                    <Panel.Title toggle>Monoclonal Antibodies</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>
                                    <p>The antibody attached to a immunoliposomes imparts its specificity for specific tissue or cell types. It also can affect
                        the bodies immune response (Sylvia 2008) (see immunogenicity)
                                    </p>
                                    <p>Groups have used both full antibodies and fragments to varying degrees of success:</p>

                                    <h6>Full Antibodies</h6>
                                    <p>Initially, whole antibodies were utilized to target the liposomes. Subsequent studies revealed that whole antibodies induce
                                    immune responses which reduce efficacy or caused major side-effects (Sylvia 2008).  In addition, whole antibody-conjugated
                                    liposomes are rapidly cleared by Fc-receptor mediated uptake by cells of the reticulo-endothelial system (Koning 2003).</p>

                                    (Image source: “Antibody Structure”)

                                    <h6>Fragments</h6>
                                    <p>To avoid immunogenicity effects and clearance via the reticuloendothelial system, the next major advance in immunoliposome
                                    formulation came by utilizing fragments of antibodies. Full antibodies are proteolytic cleavage or produced in recombinant
                                    form by genetically engineered microorganisms (See high-density fermentation of escri coli).</p>

                                    <p>Fab′ fragments have shown reduced immunogenicity and improved therapeutic effects compared to IgG immunoliposomes </p>

                                    <p>(Image source: “Antibody Structure”)</p>

                                    <p>Single-chain Fv fragments (scFv) represent the smallest part of an antibody containing the entire antigen-binding site (Sylvia 2008).</p>

                                </Panel.Body>
                            </Panel>
                            <Panel eventKey="3">
                                <Panel.Heading>
                                    <Panel.Title toggle>Polyethylene glycol (PEG)</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>
                                   HELLO WORLD
                                </Panel.Body>
                            </Panel>
                            <Panel eventKey="4">
                                <Panel.Heading>
                                    <Panel.Title toggle>Drug Payload</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>
                                    <h5>Hydrophobic </h5>
                                    <h5>Hydrophillic</h5>
                                </Panel.Body>
                            </Panel>
                        </PanelGroup>



                    </Col>
                    <Col md={6}>
                        <img src="/images/image1.png" width="100%" />
                    </Col>
                </Row>
            </div>
        );
    }
}
class Construction extends Component {
    render() {
        return (
            <div className="construction">
                <Row>
                    <Col md={12}>
                        <h4>Construction</h4>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                    </Col>
                </Row>
            </div>
            
        )
    }

}
class ApplicationsAndExamplesSection extends Component {
    render() {
        return (
            <div className="applications-and-examples">
                <Row>
                    <Col md={12}>
                        <h4>Applications and Examples</h4>


                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                    </Col>
                </Row>
            </div>
        );
    }
}

class References extends Component {
    render() {

        const references = {
            'kim2018': 'Kim et al. Dual-targeting immunoliposomes using angiopep-2 and CD133 antibody for glioblastoma stem cells., J. Controlled Release (260) 2018 245-257.',
            'park2002': 'Park et al. Anti-HER2 Immunoliposomes: Enhanced efficacy attributable to targeted delivery. 2002. Clinical Cancer Research. Vol 8, 1172-1181.',
            'Heath1980': 'Heath Td et al. Antibody targeting of liposomes: Cell specificity obtained by conjugation of (Fab’)2 to vesicle surface. Science (1980) 210(4469):539-541.',
            'Yamamoto1997': 'Yamamoto M. Increased expression of low density lipoprotein receptor-related protein/alpha2-macroglobulin receptor in human malignant astrocytomas. (1997) Cancer Res. 57 (1997) 2799–2805.',
            'Sapra2002': 'Sapra et al. Internalizing Antibodies are neccessary for improved therapeutic efficacy of antibody-targeted liposomal drugs. 2002. Cancer Reasearch 62, 7190-7194',
            'Sylvia2008': 'Syvlia et al. Novel Single-Chain Fv′ Formats for the Generation of Immunoliposomes by Site-Directed Coupling. Bioconjugate Chem. 2008, 19, 362–369',
            'philipps1995': 'Philipps, N. C., and Dahman, J. (1995) Immunogenicity of immunoliposomes: reactivity against species-specific IgG and liposomal phospholipids. Immunol. Lett. 45, 149–152. ',
            'Bendas2003': 'Bendas, G., Rothe, U., Scherphof, G. L., and Kamps, J. A. A. M. (2003) The influence of repeated injections on pharmacokinetics and biodistribution of different types of sterically stablized immunoliposomes. Biochim. Biophys. Acta 1609, 63–70.',
            'Koning2003': 'Koning, G. A., Morselt, H. W. M., Gorter, A., Allen, T. M., Zalipsky, S., Scherphof, G. L., and Kamps, J. A. A. M. (2003) Interaction of differently designed immunoliposomes with colon cancer cells and Kupffer cells. An in vitro comparison. Pharm. Res. 20, 1249–1257.',
        }

        const reviewArticles = {
            'Kontermann2006': 'Kontermann RE1. Immunoliposomes for cancer therapy. Curr Opin Mol Ther. 2006 Feb;8(1):39-45.',
            'Mozafari2005': 'Mozafari M. Liposomes: An Overview of Manufacturing Techniques. Cellular & Molecular Biology Letters. Volume 10, (2005) pp 711-719.',
            'Rafe2017': 'Rafe R. Liposomal Drug Delivery Systems Have Opened a New Window in Pharmaceutical Sciences: A Literature-based Review. '

        }

        const books = {
            'antibodyStructure': '"Antibody Structure". Accessed 10/21/18. http://ruo.mbl.co.jp/bio/e/support/method/nonspecific-reaction-reduction.html',
        }

        

    
        return (
            <Row className="references">
                <Col md={12}>

                    <h4>References</h4>
                    <h5>Primary Literature</h5>
                    <ol>
                        {Object.keys(references).map((key, index) => {
                            const reference = references[key];
                            return (
                                <li key={index}>{reference}</li>
                            );
                        })}
                    </ol>
                    <h5>Reviews</h5>
                    <ol>
                        {Object.keys(reviewArticles).map((key, index) => {
                            const reference = reviewArticles[key];
                            return (
                                <li key={index}>{reference}</li>
                            );
                        })}
                    </ol>
                    <h5>Books</h5>
                    <ol>
                        {Object.keys(books).map((key, index) => {
                            const reference = books[key];
                            return (
                                <li key={index}>{reference}</li>
                            );
                        })}
                    </ol>
                </Col>
            </Row>
        );
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />

        <Grid>
            <Row>
                <Col md={12}>
                    <div className="header-padding"></div>
                </Col>
            </Row>

            <OverviewSection />
            <hr/>
            <StructureSection />
            <hr/>
            <Construction />
            <hr/>
            <ApplicationsAndExamplesSection />
            <hr/>
            <References />
            
           
        </Grid>
      </div>
    );
  }
}

export default App;
