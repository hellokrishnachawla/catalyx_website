import Image from "next/image";
import Link from "next/link";
import { TeamMember } from "@/types/team";

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="group relative flex-shrink-0 w-[260px]">
      {/* Card */}
      <div className="overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 group-hover:shadow-xl">

        {/* Image Container */}
        <div className="relative h-[320px] w-full overflow-hidden">

          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* LinkedIn Button */}
          <Link
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="
              absolute
              right-4
              top-4
              opacity-0
              translate-y-2
              transition-all
              duration-300
              group-hover:opacity-100
              group-hover:translate-y-0
            "
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg">

              {/* LinkedIn SVG */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#0A66C2"
                className="h-6 w-6"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM0 8h5v16H0V8zm7.98 0h4.79v2.19h.07c.67-1.27 2.31-2.6 4.76-2.6C22.42 7.59 24 10.09 24 14.02V24h-5v-8.48c0-2.02-.04-4.62-2.82-4.62-2.82 0-3.25 2.2-3.25 4.48V24h-4.95V8z" />
              </svg>

            </div>
          </Link>
        </div>

        {/* Text */}
        <div className="px-5 py-5 text-center">
          <h3 className="text-xl font-semibold text-[#111827]">
            {member.name}
          </h3>

          <p className="mt-2 text-sm text-[#6B7280]">
            {member.role}
          </p>
        </div>
      </div>
    </div>
  );
}