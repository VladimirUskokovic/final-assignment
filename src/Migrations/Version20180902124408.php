<?php declare(strict_types = 1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180902124408 extends AbstractMigration
{
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE specification (id INT AUTO_INCREMENT NOT NULL, product_details_id INT NOT NULL, name VARCHAR(255) NOT NULL, value VARCHAR(255) NOT NULL, INDEX IDX_E3F1A9A287D5809 (product_details_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE product (id INT AUTO_INCREMENT NOT NULL, product_details_id INT DEFAULT NULL, category_id INT DEFAULT NULL, upc VARCHAR(15) NOT NULL, UNIQUE INDEX UNIQ_D34A04AD287D5809 (product_details_id), INDEX IDX_D34A04AD12469DE2 (category_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE seller (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, link VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE product_details (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(255) NOT NULL, description VARCHAR(255) NOT NULL, images LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE offer (id INT AUTO_INCREMENT NOT NULL, seller_id INT NOT NULL, product_id INT DEFAULT NULL, price NUMERIC(10, 2) NOT NULL, availability TINYINT(1) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, link VARCHAR(255) NOT NULL, INDEX IDX_29D6873E8DE820D9 (seller_id), INDEX IDX_29D6873E4584665A (product_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE category (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE category_specification (category_id INT NOT NULL, specification_id INT NOT NULL, INDEX IDX_10E43FD112469DE2 (category_id), INDEX IDX_10E43FD1908E2FFE (specification_id), PRIMARY KEY(category_id, specification_id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE specification ADD CONSTRAINT FK_E3F1A9A287D5809 FOREIGN KEY (product_details_id) REFERENCES product_details (id)');
        $this->addSql('ALTER TABLE product ADD CONSTRAINT FK_D34A04AD287D5809 FOREIGN KEY (product_details_id) REFERENCES product_details (id)');
        $this->addSql('ALTER TABLE product ADD CONSTRAINT FK_D34A04AD12469DE2 FOREIGN KEY (category_id) REFERENCES category (id)');
        $this->addSql('ALTER TABLE offer ADD CONSTRAINT FK_29D6873E8DE820D9 FOREIGN KEY (seller_id) REFERENCES seller (id)');
        $this->addSql('ALTER TABLE offer ADD CONSTRAINT FK_29D6873E4584665A FOREIGN KEY (product_id) REFERENCES product (id)');
        $this->addSql('ALTER TABLE category_specification ADD CONSTRAINT FK_10E43FD112469DE2 FOREIGN KEY (category_id) REFERENCES category (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE category_specification ADD CONSTRAINT FK_10E43FD1908E2FFE FOREIGN KEY (specification_id) REFERENCES specification (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE category_specification DROP FOREIGN KEY FK_10E43FD1908E2FFE');
        $this->addSql('ALTER TABLE offer DROP FOREIGN KEY FK_29D6873E4584665A');
        $this->addSql('ALTER TABLE offer DROP FOREIGN KEY FK_29D6873E8DE820D9');
        $this->addSql('ALTER TABLE specification DROP FOREIGN KEY FK_E3F1A9A287D5809');
        $this->addSql('ALTER TABLE product DROP FOREIGN KEY FK_D34A04AD287D5809');
        $this->addSql('ALTER TABLE product DROP FOREIGN KEY FK_D34A04AD12469DE2');
        $this->addSql('ALTER TABLE category_specification DROP FOREIGN KEY FK_10E43FD112469DE2');
        $this->addSql('DROP TABLE specification');
        $this->addSql('DROP TABLE product');
        $this->addSql('DROP TABLE seller');
        $this->addSql('DROP TABLE product_details');
        $this->addSql('DROP TABLE offer');
        $this->addSql('DROP TABLE category');
        $this->addSql('DROP TABLE category_specification');
    }
}
