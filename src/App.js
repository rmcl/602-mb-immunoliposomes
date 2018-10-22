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
    Thumbnail
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
                        <NavItem eventKey={1} href="#structure">
                            Structure
                        </NavItem>
                        <NavItem eventKey={2} href="#construction">
                            Construction
                        </NavItem>
                        <NavItem eventKey={2} href="#how-work">
                            How they work
                        </NavItem>
                        <NavDropdown eventKey={3} title="Applications & Examples" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Traversing the Blood Brain Barrier</MenuItem>
                            <MenuItem eventKey={3.2}>Targeting Cancer Cells</MenuItem>
                            <MenuItem eventKey={3.3}>Targeting specific cell types - </MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.4}>Separated link</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={3} href="#challenges">Challenges & Criticism</NavItem>
                        <NavItem eventKey={4} href="#references">
                            References
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

class OverviewSection extends Component {
    render() {
        return (
            <div>
                <p className="overview">
                    The goal of immunoliposomes as a drug delivery system is to maximize the delivery of therapeutic agents to specific diseased tissue, or cell types, and minimize the agents accumulation in healthy tissue (Kontermann 2006).
                </p>
                <p>
                    Liposomes are phospholipid enclosed sacs similar in composition to cell membranes. Conjugating monoclonal antibodies or antibody fragments to the membrane of liposomes transforms them into immunoliposomes. The idea for immunoliposomes was first presented in the early 1980s (Rafe 1980). In the intervening 20 plus years, immunoliposomes have been studied extensively in the context of drug delivery, cosmetics and basic molecular biology research.  
                </p>
                <p>
                    This website will focus on their application to drug delivery and try to outline some of the important aspects for this use case.
                </p>
            </div>
        );
    }
}
class StructureSection extends Component {
    render() {
        return (
            <div className="structure">
                <a name="structure" />
                <Row>
                    <Col md={12}>
                        <h4>Structure</h4>
                        <p>The structure of immunoliposomes has evolved over the years both in response to use case and as the mechanism of action, 
                        and immunogenic response has become better understood. These are the major components that are universal to all immunoliposomes:
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <PanelGroup accordion id="accordion-example">
                            <Panel eventKey="1">
                                <Panel.Heading>
                                    <Panel.Title toggle>Phospholipid Bilayer</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>

                                    <p>Most cell membranes as well as liposomes are primarily composed of phospholipids.</p>
                                    <br/>
                                    
                                    <Thumbnail src="images/image1_4.png" alt="phospholipid">
                                        <p className="text-center">(Image Source: “Phospholipids”)</p>
                                    </Thumbnail>

                                    <br/><br/>
                                    <p>Just like in a cell-membrane non-polar interactions between phosphlipids serve to form regions of hydrophobic and hydrophillic molecules. </p>
                                    <br/>

                                    <Thumbnail src="images/image1_1.png" alt="Structure of Phospholipid">
                                        <p className="text-center">(Image source: “General structure of a phospholipid”)</p>
                                    </Thumbnail>
                                

                                    <p>The lipid membrane serves as a barrier, protecting the drug from degradation and clearance while in the extracellular environment. </p>

                                </Panel.Body>
                            </Panel>
                            <Panel eventKey="2">
                                <Panel.Heading>
                                    <Panel.Title toggle>Monoclonal Antibodies</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>
                                    <p>The antibody attached to a immunoliposomes imparts its specificity for specific tissue or cell types. It also can affect
                        the bodies immune response (Sylvia 2008) (see <a href="#immunogenicity">immunogenicity</a>)
                                    </p>
                                    <p>Groups have used both full antibodies and fragments to varying degrees of success.</p>

                                    <h5>Full Antibodies</h5>
                                    <p>Initially, whole antibodies were utilized to target the liposomes. Subsequent studies revealed that whole antibodies induce
                                    immune responses which reduce efficacy or caused major side-effects (Sylvia 2008).  In addition, whole antibody-conjugated
                                    liposomes are rapidly cleared by Fc-receptor mediated uptake by cells of the reticulo-endothelial system (Koning 2003).</p>

                                    <Thumbnail src="images/image4.png" alt="Structure of Antibodies">
                                        <p className="text-center">(Image source: “Antibody Structure”)</p>
                                    </Thumbnail>

                                    <h5>Fragments</h5>
                                    <p>To avoid immunogenicity effects and clearance via the reticuloendothelial system, the next major advance in immunoliposome
                                    formulation came by utilizing fragments of antibodies. Full antibodies are proteolytically cleaved or produced in recombinant
                                    form by genetically engineered microorganisms (See <a href="#construction">high-density fermentation of escri coli in construction</a>).</p>

                                    <p>Fab′ fragments have shown reduced immunogenicity and improved therapeutic effects compared to IgG immunoliposomes </p>

                                    <br/>
                                    <Thumbnail src="images/image2.png" alt="Structure of Antibodies">
                                        <p className="text-center">(Image source: “Antibody Structure”)</p>
                                    </Thumbnail>


                                    <p>Single-chain Fv fragments (scFv) represent the smallest part of an antibody containing the entire antigen-binding site (Sylvia 2008).</p>

                                </Panel.Body>
                            </Panel>
                            <Panel eventKey="3">
                                <Panel.Heading>
                                    <Panel.Title toggle>Polyethylene glycol (PEG)</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>
                                    <p>Drugs encapsulated within Liposomes have longer circulation times (Mozafari 2005) however they are eventually cleared from the bloodstream by the reticuloendothelial system (Petrilli 2018). This clearance can be slowed by conjugating Polyethylene glycol (PEG) to the surface of the liposome. It is thought that the addition of PEG sterically blocks the phagocytic cells from identifying the liposome as a foreign agent (Petrilli 2018). One disadvantage of adding PEG is that it may also reduce the affinity of the antibodies to their target ligands. A further advance, is to conjugate the antibodies to the ends of PEG as shown below.</p>
                                    <Thumbnail src="images/image1_3.png" alt="100%">
                                        <p className="text-center">(Petrilli et al 2018)</p>
                                    </Thumbnail>

                                    <h6>Type I Liposomes</h6>
                                    <p>In the literature, type I liposomes are those that may or may not include PEG and have antibodies conjugated directly to the head of the bilayer</p>
                                    <h6>Type II Liposomes (Kontermann 2006)</h6>
                                    <p>The antibodies are conjugated to the distal end of the PEG molecuels (Kontermann 2006).</p>
                                    <br/>
                                    <p><b>Because of their improved circulation times and immunogenicity, type II liposomes are now more frequently used.</b> (Kontermann 2006)</p>
                                </Panel.Body>
                            </Panel>
                            <Panel eventKey="4">
                                <Panel.Heading>
                                    <Panel.Title toggle>Drug Payload</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>
                                    <p>Immunoliposomes can be used to deliver many different therapeutic agents. One major consideration is whether the agent is <b>hydrophilic</b> or <b>hydrophobic</b>. If the agent is relatively polar it can be encapsulated in hydrophilic center of the liposome. This location will shield the agent from the outside environment  and allow it to be delivered to its target when liposome is endocytosed into the target cell. In contrast, if the agent is hydrophobic it can be incorporated within the tails of liposomes bilayer. The agent will still be protected from the outside environment (Kontermann 2006). </p>
                                </Panel.Body>
                            </Panel>
                        </PanelGroup>



                    </Col>
                    <Col md={6}>
                        <Thumbnail src="/images/image1.png" alt="100%">
                            <p className="text-center">Structure of a Immunoliposome<br/>(Rafe 2017)</p>
                        </Thumbnail>

                    </Col>
                </Row>
            </div>
        );
    }
}


class HowTheyWork extends Component {
    render() {
        return (
            <div className="how-work">
                <Row>
                    <Col md={12}>
                        <h4><a name="how-work"></a>How Immunoliposomes Work</h4>
                    </Col>
                </Row>
                <Row>
                </Row>
            </div>
        )
    }
}

class Construction extends Component {
    render() {
        return (
            <div className="construction">
                <Row>
                    <Col md={12}>
                        <h4><a name="construction"></a>Construction</h4>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <p>While the exact techniques for constructing immunoliposomes varies from group to group, in general the basic steps are as follows:</p>
                        <PanelGroup accordion id="accordion-example">
                            <Panel eventKey="1">
                                <Panel.Heading>
                                    <Panel.Title toggle>1. Preparation of liposomes</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>
                                    <p>Liposomes can be prepared according to repeated freeze-thawing or the reverse-phase evaporation method (Park 2006). Lipids and the drug to be incorporated are mixed and subject to ultrasound based mixing. The mixture is then evaporated leaving behind a gel containing the drug encapsulated liposomes. Subsequent sorting separates the liposomes that had the drug successfully incorporated (Cortesis 1999).</p>

                                    <Thumbnail src="/images/image2_1.png" alt="100%">
                                        <p className="text-center">Reverse phase evaporation method (Image source: Cortesis 1999)</p>
                                    </Thumbnail>
                                    

                                </Panel.Body>
                            </Panel>
                            <Panel eventKey="2">
                                <Panel.Heading>
                                    <Panel.Title toggle>2. Construction of antibody fragments</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>


                                <Thumbnail src="images/1499003529230.jpg" alt="100%">
                                    <p className="text-center">The different fragment types of an Antibody.</p>
                                </Thumbnail>

                                <Thumbnail src="images/1499003529888.jpg" alt="100%">
                                    <p className="text-center">Papain digestion can be utilized to break antibodies into fragments.</p>
                                </Thumbnail>
                                
                                

                                <h4>Digestion</h4>
                                <p>Fab' fragments can be generated by pepsin digestion of existing imunoglobulin (Ig)G molecules. (Kontermann 2006)</p>



                                <h4>Fermentation of Escherichia Coli</h4>
                                
                                
                                </Panel.Body>
                                
                            </Panel>
                            <Panel eventKey="3">
                                <Panel.Heading>
                                    <Panel.Title toggle>3. Conjugate Antibody Fragments to Liposomes</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>
                                3
                                </Panel.Body>
                            </Panel>
                        </PanelGroup>
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

                        <br/>
                        <h5>Traversing the blood brain barrier to deliver TMZ to GBM stem cells.</h5>
                        <br/>
                    </Col>
                </Row>
                <Row>
           
                    <Col md="6">
                        <p>In Kim et al., the authors goal was to develop a new treatment for Glioblastoma multiforme cancer (GBM). 
                        GBM is a highly malignant brain cancer with limited treatment options and poor prognosis. 
                        </p>
                        <p>The existing treatment 
                        for GBM is injection of Temozolomide (TMZ), however it's effectivness is limited because it cannot access the cancer
                        cells located within the CNS and behind the blood brain barrier (BBB). 
                        </p>
                    </Col>
                    <Col md="6">
                        <Thumbnail src="images/image5.png" alt="100%">
                            <p className="text-center">("Immunoliposome". Kim 2018)</p>
                        </Thumbnail>
                        <br/>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <Thumbnail src="images/image3.png" alt="100%">
                            <p className="text-center">("The dual-targeting system". Kim 2018)</p>
                        </Thumbnail>
                        <br/>
                        
                    </Col>
                    <Col md="6">
                        <p>In this work, the authors attempted to create a drug delivery system that brought Temozolomide (TMZ) to Glioblastoma stem cells (GSCs). 
                        To achieve this they created a “Dual-targeting” immunoliposome system by conjugating both a Anti-CD133 
                        and Angiopep-2 to the surface of a liposome with TMZ incorporated (Kim 2018)</p>
                    </Col>
                </Row>
            </div>
        );
    }
}

class ChallengesSection extends Component {
    render() {
        return (
            <div class="challenges">
                <a name="challenges" />
                <Row>
                    <Col md={12}>
                        <h4>Challenges</h4>

                        <br/>
                        <a name="immunogenicity" />
                        <h5>Immunogenicity</h5>
                        Immunogenicity is defined as the, "ability of a particular substance, such as an antigen or epitope, to provoke an immune response in the body of a human and other animal" ().
                        <br/>
                    </Col>
                </Row>
            </div>
        )
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
            'Petrilli2018': 'Petrilli R., Eloy J.O., Lee R.J., Lopez R.F.V. (2018) Preparation of Immunoliposomes by Direct Coupling of Antibodies Based on a Thioether Bond. In: Picanço-Castro V., Swiech K. (eds) Recombinant Glycoprotein Production. Methods in Molecular Biology, vol 1674. Humana Press, New York, NY',
            'Cortesis1999': 'Cortesis R. Preparation of liposomes by reverse-phase evaporation using alternative organic solvents. Journal of Microencapsulation. Volume 16, 1999. 251-256.'
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
                    <a name="references" />
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
            <a name="home" />
            <Row>
                <Col md={12}>
                    <div className="header-padding"></div>
                </Col>
            </Row>
            <p class="text-center">By Russell McLoughlin <br/>602 Molecular Biology at Johns Hopkins University.</p>
            <br/>
            <OverviewSection />
            <hr/>
            <StructureSection />
            <hr/>
            <Construction />
            <hr/>
            <ApplicationsAndExamplesSection />
            <hr/>
            <ChallengesSection />
            <hr/>
            <References />
            <hr/>
            <br/><br/><br/>
           
        </Grid>
      </div>
    );
  }
}

export default App;
