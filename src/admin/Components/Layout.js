import { __ } from '@wordpress/i18n';
import { Outlet, Link, useLocation } from 'react-router-dom';

import Header from '../../../../bpl-tools/Admin/Header';

const navigation = [
	{ name: __('Welcome', 'button-block'), href: '/welcome' },
	{ name: __('Demos', 'button-block'), href: '/demos' },
	{ name: __('Pricing', 'button-block'), href: '/pricing' },
	{ name: __('Feature Comparison', 'button-block'), href: '/feature-comparison' },
	{ name: __('Settings', 'button-block'), href: '/settings' }
];

const Layout = (props) => {
	const location = useLocation();

	return <div className='bPlDashboard'>
		<Header {...props}>
			<nav className='bPlDashboardNav'>
				{navigation
					?.map((item, index) => <Link
						key={index}
						to={item.href}
						className={`navLink ${location.pathname === item.href ? 'active' : ''}`}
					>
						{item.name}
					</Link>)}
			</nav>
		</Header>

		<main className='bPlDashboardMain'>
			<Outlet />
		</main>
	</div>
}
export default Layout;