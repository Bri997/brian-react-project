import React from 'react'
import { Link } from 'react-router-dom'
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
} from 'reactstrap'

function DropdownFixedNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false)
  return (
    <>
      {collapseOpen ? (
        <div
          id='bodyClick'
          onClick={() => {
            document.documentElement.classList.toggle('nav-open')
            setCollapseOpen(false)
          }}
        />
      ) : null}
      <Navbar className='navbar-absolute navbar-transparent' expand='lg'>
        <Container>
          <UncontrolledDropdown className='button-dropdown'>
            <DropdownToggle
              caret
              tag='a'
              data-toggle='dropdown'
              href='/'
              id='navbarDropdown'
              onClick={(e) => e.preventDefault()}
            >
              <span className='button-bar'></span>
              <span className='button-bar'></span>
              <span className='button-bar'></span>
            </DropdownToggle>
            <DropdownMenu aria-labelledby='navbarDropdown'>
              <DropdownItem header>My Links</DropdownItem>
              <DropdownItem tag='a' href='https://github.com/Bri997'>
                GitHub
              </DropdownItem>
              <DropdownItem tag='a' href='https://www.linkedin.com/in/bmusial/'>
                LinkedIn
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <div className='navbar-translate'>
            <NavbarBrand to='/' tag={Link} id='navbar-brand'>
              Just A Portfolio
            </NavbarBrand>

            <button
              onClick={() => {
                document.documentElement.classList.toggle('nav-open')
                setCollapseOpen(!collapseOpen)
              }}
              aria-expanded={collapseOpen}
              className='navbar-toggler'
            >
              <span className='navbar-toggler-bar top-bar'></span>
              <span className='navbar-toggler-bar middle-bar'></span>
              <span className='navbar-toggler-bar bottom-bar'></span>
            </button>
          </div>
          <Collapse isOpen={collapseOpen} navbar>
            <Nav className='ml-auto' id='ceva' navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color='default'
                  data-toggle='dropdown'
                  href='#'
                  id='navbarDropdownMenuLink1'
                  size='lg'
                  onClick={(e) => e.preventDefault()}
                >
                  <p>Projects</p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby='navbarDropdownMenuLink1' right>
                  <DropdownItem tag='a' href='https://www.newclientintake.com'>
                    <i className='now-ui-icons design_app'></i>A Better Intake
                  </DropdownItem>
                  <DropdownItem tag='a' href='https://appdevs.us/'>
                    <i className='now-ui-icons tech_mobile'></i>
                    Websites
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    caret
                    color='default'
                    data-toggle='dropdown'
                    href='#'
                    id='navbarDropdownMenuLink1'
                    size='lg'
                    onClick={(e) => e.preventDefault()}
                  >
                    <p>Resume</p>
                  </DropdownToggle>
                  <DropdownMenu aria-labelledby='navbarDropdownMenuLink1' right>
                    <DropdownItem
                      tag='a'
                      href='https://brianresume.s3.amazonaws.com/Brian+Musial+Resume+2021.3.pdf'
                    >
                      <i className='now-ui-icons arrows-1_cloud-download-93'></i>
                      .PDF
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default DropdownFixedNavbar
