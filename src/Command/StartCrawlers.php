<?php

namespace App\Command;

use App\Entity\Seller;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Process\Process;

class StartCrawlers extends Command
{
  protected static $defaultName = 'app:start:crawlers';

  private $command;

  public function __construct(string $projectDir)
  {
    $this->command = "php {$projectDir}/bin/console import:job";

    parent::__construct();
  }

  protected function configure()
  {
    $this
      // the short description shown while running "php bin/console list"
      ->setDescription('Start crawlers that collects data form stores.')

      // the full command description shown when running the command with
      // the "--help" option
      ->setHelp('This command allows you to collect all information available for products that are currently selling in stores from our database.');
  }

  protected function execute(InputInterface $input, OutputInterface $output)
  {
    for ($i = 0; $i < 1000; $i++) {
      usleep(20000000); // 20 seconds

      $process = new Process($this->command);
      $process->start();

      $pid = $process->getPid();

      $output->writeln("START PROCESS process with id: {$pid} \n");

      $process->wait();

      $output->writeln("PROCESS {$pid} finished \nOUTPUT: {$process->getOutput()}\n");
    }
  }
}
