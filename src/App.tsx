import {
	BrowserRouter,
	Link,
	Route,
	Routes,
	useLocation,
} from "react-router-dom";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ThemeProvider } from "@/contexts/theme";
import { Changelog } from "@/pages/Changelog";
import { FAQ } from "@/pages/FAQ";
import { Home } from "@/pages/Home";
import { PrivacyPolicy } from "@/pages/PrivacyPolicy";

function NotFound() {
	return (
		<main className="mx-auto flex max-w-lg flex-col items-center justify-center px-4 py-24 text-center">
			<h1 className="font-display text-5xl font-bold tracking-tight text-foreground">
				404
			</h1>
			<p className="mt-4 text-muted-foreground">Page not found.</p>
			<Link
				to="/"
				className="mt-8 text-sm font-medium text-primary underline-offset-4 hover:underline"
			>
				Go home
			</Link>
		</main>
	);
}

function RoutedMain() {
	const { pathname } = useLocation();
	return (
		<div id="main" tabIndex={-1} className="flex-1 outline-none">
			<div key={pathname} className="animate-fade-in">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/faq" element={<FAQ />} />
					<Route path="/privacy" element={<PrivacyPolicy />} />
					<Route path="/changelog" element={<Changelog />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</div>
	);
}

function App() {
	return (
		<ThemeProvider>
			<BrowserRouter basename={import.meta.env.BASE_URL}>
				<div className="flex min-h-svh flex-col">
					<a
						href="#main"
						className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-[100] focus-visible:rounded-full focus-visible:bg-primary focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:font-medium focus-visible:text-primary-foreground"
					>
						Skip to content
					</a>
					<Navbar />
					<RoutedMain />
					<Footer />
				</div>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
