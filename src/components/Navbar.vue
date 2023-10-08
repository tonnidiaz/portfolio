<template>
    <div class="navbar bg-base-100 fixed  z-[5] bg-opacity-70 top-0" >
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost btn-circle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h7"
                        />
                    </svg>
                </label>
                <ul
                    tabindex="0"
                    class="menu menu-sm dropdown-content mt-1 z-[1] p-2 shadow-xl bg-card rounded-box w-52"
                >
                  
                    <li><a href="#about">About</a></li>
                      <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#skills">Skills</a></li>
                </ul>
            </div>
           
        </div>
        <div class="navbar-center">
             <a class="btn btn-ghost normal-case text-xl fw-9">Portfolio</a>
        </div>
        <div class="navbar-end">
            <a href="#contact" class="btn btn-outline btn-sm btn-primary">
                Contact
            </a>
            
        </div>
    </div>
</template>
