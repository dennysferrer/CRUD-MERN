import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
    return (
        <>
            <h1 className="text-4xl font-bold">Hola mundo</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<p>Home Page</p>} />
                    <Route path="/login" element={<p>Login</p>} />
                    <Route path="/register" element={<p>Register</p>} />
                    <Route path="/tasks" element={<p>Tasks Page</p>} />
                    <Route path="/add-task" element={<p>New Task</p>} />
                    <Route path="/tasks/:id" element={<p>Update Task</p>} />
                    <Route path="/profile" element={<p>Profile</p>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}