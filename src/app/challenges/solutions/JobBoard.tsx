"use client";
import { JOBS, Job } from "@/app/api/challenges/JobBoard/data";
import Card from "@/app/components/Card/Card";
import { formatDistance } from "date-fns";
import React, { HTMLAttributes } from "react";
import {
  Form,
  GridList,
  GridListItem,
  Input,
  Key,
  Modal,
  ModalOverlay,
  ModalOverlayProps,
  Tag,
  TagGroup,
  TagList,
  TextField,
} from "react-aria-components";
import { BiSearch } from "react-icons/bi";
import { IoLocationOutline, IoWalletOutline } from "react-icons/io5";
import { MdClear } from "react-icons/md";

export const JobBoard = () => {
  const [jobs, setJobs] = React.useState(() => JOBS);
  const [selectedJobId, setSelectedJobId] = React.useState<Key | null>(null);
  const selectedJob = jobs.find((job) => job.id === selectedJobId);

  const filterJobs = (searchText: string) => {
    setJobs(
      JOBS.filter((job) =>
        job.title.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-4 md:gap-6  | rounded-xl | mb-6 relative overflow-clip">
      <JobSearchContainer>
        <SearchForm onSubmit={filterJobs} onClear={() => setJobs(JOBS)} />
      </JobSearchContainer>
      <ResultContainer>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-black">Search Results</h1>
          <p className="text-black text-base font-semibold opacity-70 ">
            {jobs.length} results found
          </p>
        </div>
        <GridList
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          aria-label="Results Grid"
          items={jobs}
          onAction={(key) => setSelectedJobId(key)}
        >
          {(item) => (
            <GridListItem
              textValue="Result item"
              className="outline-none transition-all focus:ring-2  ring-pink-500  rounded-lg overflow-clip"
            >
              <JobCard job={item} />
            </GridListItem>
          )}
        </GridList>
      </ResultContainer>
      {selectedJob && (
        <JobDetailsModal
          isOpen
          onOpenChange={() => selectedJobId && setSelectedJobId(null)}
          job={selectedJob}
        />
      )}
    </div>
  );
};

const SearchForm = ({
  onSubmit,
  onClear,
}: {
  onSubmit: (value: string) => void;
  onClear: () => void;
}) => {
  const [searchText, setSearchText] = React.useState("");

  return (
    <Form
      aria-label="Search form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(searchText);
      }}
      className="flex w-full gap-4"
    >
      <TextField
        aria-label="Search jobs"
        className="flex-1 flex items-center rounded-lg overflow-clip bg-white w-full px-2 py-1
          focus-within:ring-2 ring-pink-500
          focus:ring-2
        "
        value={searchText}
        onChange={setSearchText}
      >
        <BiSearch className="w-6 h-6 text-black opacity-60" />
        <Input
          className="h-full flex items-center flex-1 outline-none p-2 "
          placeholder="find a job"
        />
        {searchText && (
          <MdClear
            className="size-4 hover:bg-neutral-300"
            onClick={() => {
              setSearchText("");
              onClear();
            }}
          />
        )}
      </TextField>
      <button
        type="submit"
        className="px-4 bg-pink-400 text-white flex items-center justify-center rounded-lg disabled:opacity-30"
        disabled={searchText.length === 0}
      >
        Search
      </button>
    </Form>
  );
};
type JobCardProps = {
  job: Job;
};

const JobCard = ({ job }: JobCardProps) => {
  const Logo = job.logo;
  return (
    <Card className="drop-shadow-none shadow-none">
      <Card.Header>
        <div className="flex gap-2 items-center w-full">
          <div className="p-2 bg-gray-200 rounded-lg">
            <Logo className="size-10" />
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <h2 className="text-black text-lg font-bold">{job.title}</h2>
            <div className="flex items-center justify-between">
              <p className="text-black opacity-60">{job.company}</p>
              <p className="flex gap-1 items-center">
                <IoLocationOutline className="size-4 text-pink-500" />{" "}
                {job.jobLocation.country}
              </p>
            </div>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <TagGroup aria-label="skill group">
          <TagList className="flex items-center gap-2">
            {job.skills.map((skill) => {
              return (
                <Tag
                  key={`${job.id}-${skill}`}
                  aria-label={`${skill}`}
                  className="rounded-full px-2 py-0.5 bg-gray-200 text-black opacity-60 text-xs"
                >
                  {skill}
                </Tag>
              );
            })}
          </TagList>
        </TagGroup>
      </Card.Body>
      <Card.Footer>
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <IoWalletOutline className="size-4 text-pink-500" />
            <p className="text-black text-sm">{job.salary}</p>
          </div>
          <p className="text-sm text-black opacity-60">
            {formatDistance(job.postingDate, Date.now(), {
              addSuffix: true,
            })}
          </p>
        </div>
      </Card.Footer>
    </Card>
  );
};

const JobDetailsModal = ({
  job,
  ...props
}: { job: Job } & ModalOverlayProps) => {
  const Logo = job.logo;
  return (
    <ModalOverlay
      {...props}
      className={`
          fixed inset-0 z-10 bg-black/10  flex min-h-full items-center justify-center backdrop-blur
        `}
      isDismissable
      isKeyboardDismissDisabled
    >
      <Modal className="bg-white w-full max-w-lg h-full max-h-[80%] border drop-shadow-2xl rounded-3xl p-6">
        <div className="bg-white w-full h-full flex flex-col items-start justify-start gap-4">
          <div className="p-2 bg-gray-200 rounded-lg">
            <Logo className="size-10" />
          </div>
          <h2 className="text-black text-lg font-semibold">{job.title}</h2>
          <p className="text-sm text-black opacity-60">{job.company}</p>
          <p className="bg-pink-100 text-pink-500 text-sm rounded-full p-2">
            +{job.numOfApplicants} Applicants
          </p>
          <hr className="w-full" />
          <h2 className="text-black text-lg font-semibold">Description</h2>
          <p className="text-black text-sm opacity-60 line-clamp-6">
            {job.description}
          </p>

          <hr className="w-full" />
          <h2 className="text-black text-lg font-semibold">Skills</h2>
          <TagGroup aria-label="skill group">
            <TagList className="flex items-center gap-2">
              {job.skills.map((skill) => {
                return (
                  <Tag
                    key={`${job.id}-${skill}`}
                    aria-label={`${skill}`}
                    className="rounded-full px-2 py-0.5 bg-gray-200 text-black opacity-60 text-xs"
                  >
                    {skill}
                  </Tag>
                );
              })}
            </TagList>
          </TagGroup>
          <hr className="w-full" />
          <h2 className="text-black text-lg font-semibold">Based salary</h2>
          <p className="text-black text-base opacity-60 line-clamp-6">
            {job.salary}
          </p>
          <button
            aria-label="Apply job"
            className="w-full text-white bg-pink-400 py-2 rounded-xl mt-auto"
          >
            Apply now
          </button>
        </div>
      </Modal>
    </ModalOverlay>
  );
};

type JobSearchContainerProps = HTMLAttributes<HTMLDivElement>;

const JobSearchContainer = (props: JobSearchContainerProps) => {
  return (
    <div
      className="bg-violet-50 rounded-3xl  flex gap-4 w-full px-6 py-4"
      {...props}
    />
  );
};

type ResultContainerProps = HTMLAttributes<HTMLDivElement>;

const ResultContainer = (props: ResultContainerProps) => {
  return (
    <div
      className="bg-violet-50 rounded-3xl flex-1 overflow-y-auto w-full p-6 space-y-6"
      {...props}
    />
  );
};
