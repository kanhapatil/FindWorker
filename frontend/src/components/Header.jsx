import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
    { name: 'Find workers', to: '/' },
    { name: 'Contact', to: '/contact' },
];

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isUserMode, setIsUserMode] = useState(true); // State to track mode

    const toggleMode = () => {
        setIsUserMode((prevMode) => !prevMode);
    };

    return (
        <>
            <header className="absolute inset-x-0 top-0 z-50 bg-indigo-600">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <Link to="/" className="-m-1.5 p-1.5 text-white">
                            <h2>LOGO</h2>
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.to}
                                className="text-sm font-semibold leading-6 text-white"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <label className="flex items-center cursor-pointer">
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    className="sr-only"
                                    checked={isUserMode}
                                    onChange={toggleMode}
                                />
                                <div className="block bg-gray-200 w-14 h-8 rounded-full"></div>
                                <div
                                    className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${isUserMode ? 'transform translate-x-0' : 'transform translate-x-6'
                                        }`}
                                ></div>
                            </div>
                            <span className="ml-3 text-sm font-semibold text-white">
                                {isUserMode ? 'User Mode' : 'Work Mode'}
                            </span>
                        </label>

                        &nbsp;&nbsp;
                        <Link to="/signin" className="text-sm mt-1 font-semibold leading-6 text-white">
                            Sign in <span aria-hidden="true">&rarr;</span>
                        </Link>

                        <Link to="/profile" className="text-sm mt-1 font-semibold leading-6 text-white">
                            Profile <span aria-hidden="true"></span>
                        </Link>

                        &nbsp;&nbsp;
                        <a href="#" className="text-sm mt-1 font-semibold leading-6 text-white">
                            Sign out <span aria-hidden="true">&larr;</span>
                        </a>
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link to="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    alt=""
                                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                    className="h-8 w-auto"
                                />
                            </Link>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.to}
                                            onClick={() => setMobileMenuOpen(false)}  // Close menu on click
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <Link
                                        to="/signin"
                                        onClick={() => setMobileMenuOpen(false)}  // Close menu on click
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Sign in
                                    </Link>
                                    <Link
                                        to="/profile"
                                        onClick={() => setMobileMenuOpen(false)}  // Close menu on click
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Profile
                                    </Link>
                                    <a
                                        href="#"
                                        onClick={() => setMobileMenuOpen(false)}  // Close menu on click
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Sign out
                                    </a>
                                </div>
                            </div>
                        </div>

                    </DialogPanel>
                </Dialog>
            </header>

            <Outlet />
        </>
    );
};

export default Header;
