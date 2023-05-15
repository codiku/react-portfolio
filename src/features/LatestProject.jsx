import { Box, Flex, Heading, Image, Wrap, WrapItem } from "@chakra-ui/react";
import { ProjectsAPI } from "api/projects";
import { SkillBadges } from "./SkillBadges";
import { badgeColors } from "styles/badgeColor";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function LatestProjects() {
  const { t } = useTranslation("home");
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    (async () => {
      setProjects(await ProjectsAPI.fetchAll());
    })();
  }, []);

  const renderProject = (project) => {
    return (
      <WrapItem key={project.id}>
        <Box>
          <Image
            w={350}
            src={`${process.env.REACT_APP_API_BASE_URL}${project.attributes.images.data.attributes.url}`}
          />
          <Heading size="md" color="secondary" mt={1} minH={50}>
            <Box
              display={"inline-block"}
              verticalAlign="middle"
              mr={3}
              bg="primary.strong"
              w={25}
              h={1}
            />
            {project.attributes.title}
          </Heading>
          <Box maxW={350}>
            <SkillBadges
              skills={project.attributes.technologies.map((tech) => {
                return {
                  label: tech.technologie,
                  bg: badgeColors[tech.technologie],
                };
              })}
            />
          </Box>
        </Box>
      </WrapItem>
    );
  };
  return (
    <Flex direction={"column"} w="100%">
      <Heading color={"secondary"} size="2xl">
        {t("latestProjects")}
      </Heading>
      <Wrap mt={10} spacing={20} justify="space-between">
        {projects?.map(renderProject)}
      </Wrap>
    </Flex>
  );
}

/*

 <Heading size="md" color="secondary" mt={1} minH={50}>
          <Box
            display={"inline-block"}
            verticalAlign="middle"
            mr={3}
            bg="primary.strong"
            w={25}
            h={1}
          />
          {project.attributes.title}
        </Heading>
        <Box maxW={350}>
          <SkillBadges
            skills={project.attributes.technologies.map((tech) => {
              return {
                label: tech.technologie,
                bg: badgeColors[tech.technologie],
              };
            })}
          />
        </Box>

        */
