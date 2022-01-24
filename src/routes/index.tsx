import Story from 'Features/Story'
import { type } from 'os'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'

const routes = [
	{
		name: '/',
		element: (<div>Hello World</div>)
	},
	{
		name: 'story',
		element: (<div>Story</div>)
	}, 
	{
		name: '*',
		elemen: (<div>Not found</div>)
	}
]

const MainRoute = () => {
	return(
    <Routes>
			{routes.map(({name, element}, index) => <Route key={index} path={name} element={element}/>)}
      {/* <Route path="/" element={<div>Hello world <Outlet/></div>}>
        <Route path="expenses" element={<div>Good morning world</div>} />
        <Route path="invoices" element={<div>Hello double world</div>}>
          <Route
            index
            element={
              <main style={{ padding: '1rem' }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path=":invoiceId" element={<div>What is the interesting world</div>} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
			<Route
				path="/login"
				element={<div>Login</div>}
			/>
			<Route
				path="/register"
				element={<div>Register</div>}
			/> */}
			<Route  path="*" element={(<div>Not found</div>)}/>
    </Routes>
	)
}

export default MainRoute